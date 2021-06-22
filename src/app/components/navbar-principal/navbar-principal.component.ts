import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/shared/models/user.interface';


@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.scss']
})
export class NavbarPrincipalComponent implements OnInit {

  public user$: Observable<User> = this.authSvc.user$;

  
  constructor(public authSvc: AuthService, private router: Router, private toastr: ToastrService, private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    
  }
  async onLogout() {
    try {
      this.router.navigate(['/login'])
      await this.authSvc.logout();
      this.toastr.info('Gracias por visitarnos!', 'Tu sesión ha finalizado',{
        positionClass: 'toast-bottom-right'
      });
  
    } catch (error) {
      console.log(error);
    }
  }

}
