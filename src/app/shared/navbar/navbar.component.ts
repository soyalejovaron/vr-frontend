import { Roles, User } from '../../shared/models/user.interface';
import { Observable } from 'rxjs';
import { AuthService } from '..//../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public user$: Observable<User> = this.authSvc.user$;

  
  constructor(public authSvc: AuthService, private router: Router, private toastr: ToastrService, private usuarioService: UsuarioService) {
  }


  async onLogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['/home']);
      this.toastr.info('Gracias por visitarnos!', 'Tu sesión ha finalizado',{
        positionClass: 'toast-bottom-right'
      });
  
    } catch (error) {
      console.log(error);
    }
  }
}
