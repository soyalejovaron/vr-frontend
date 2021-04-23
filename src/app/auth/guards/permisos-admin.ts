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
export class PermisosAdmin implements CanActivate {
  constructor(private authSvc: AuthService, private toastr: ToastrService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authSvc.user$.pipe(
      take(1),
      map((user) => user && this.authSvc.esAdministrador(user)),
      tap((canEdit) => {
        if (!canEdit) {
          this.toastr.error('Necesitas ser administrador', 'No tienes acceso a esta ruta',{
            positionClass: 'toast-bottom-left'
          });
          this.router.navigate(['/home']);
        }
      })
    );
  }
}
