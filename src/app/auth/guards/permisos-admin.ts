import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
// Implementamos canActivate en la clase, el cual servirá para validar el rol y así, conceder acceso a la ruta o no
export class PermisosAdmin implements CanActivate {
  constructor(private authSvc: AuthService, private toastr: ToastrService, private router: Router) {}

  // Hacemos uso del canActivate, indicandole tambien el/los tipos de datos que recibirá
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    // Indicamos que retornará esta clase al usuario que se encuentre loguedo en ese momento
    // Ademas, con "pipe" le damos una especie de formato a lo que retornaremos
    return this.authSvc.user$.pipe(
      take(1),
      // Haremos un mapeo del usuario logueado, y validaremos si el rol es equivalente a "Administrador"
      map((user) => user && this.authSvc.esAdministrador(user)),
      // Validamos si el rol que se encontró en el mapeo es valido para entrar a la ruta
      tap((canEdit) => {
        // Si el usuario no tiene el rol necesario, se mostrará un mensaje y se le retornará al componente de inicio
        if (!canEdit) {
          this.toastr.error('Necesitas ser administrador', 'No tienes acceso a esta ruta',{
            positionClass: 'toast-bottom-left'
          });
          this.router.navigate(['/home']);
        } else{
          // Si el usuario si tiene acceso, se le enviará a la ruta que intentó acceder, ademas, se le mostrará un mensaje
          this.toastr.success('', 'Acceso concedido',{
            positionClass: 'toast-bottom-left'
          });
        } 
      })
    );
  }
}
