import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PermisosAdmin implements CanActivate {
  constructor(private authSvc: AuthService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authSvc.user$.pipe(
      take(1),
      map((user) => user && this.authSvc.esAdministrador(user)),
      tap((canEdit) => {
        if (!canEdit) {
          window.alert('Acceso Denegado. Necesitas ser administrador.');
        }
      })
    );
  }
}
