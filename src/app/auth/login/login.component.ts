import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.interface';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public user$: Observable<User> = this.authSvc.user$;
  submitted = false;
  confirmarLogin = false;
  usuarioLogin: FormGroup;

  
  constructor(private _usuarioService: UsuarioService ,private authSvc: AuthService, private router: Router, private toastr: ToastrService, private fb: FormBuilder) {
    this.usuarioLogin = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }

  async onGoogleLogin() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        this.checkUserIsVerified(user);
        this.toastr.success(user.displayName,'!Bienvenido a ViveRegistro!',{
          positionClass: 'toast-bottom-right'
        });
      } 
    } catch (error) {
      console.log(error);
    }
  }


  async onLogin() {
    try {
      this.submitted= true;
    if(this.usuarioLogin.invalid){
      return;
    }
    const { email, password } = this.usuarioLogin.value;
    const user = await this.authSvc.login(email, password);
      if(user){
        this.checkUserIsVerified(user);
      } else{
        this.confirmarLogin=true;
      }
      
    } catch (error) {
      console.log(error);
    }
    
  }

  private checkUserIsVerified(user: User) {
    let uid=user.uid;
    this._usuarioService.getUsuario(uid).subscribe(data => {
      let verificacionU= data.payload.data()['verificacion'];
      if(user && user.emailVerified && verificacionU=='verificado'){
        this.router.navigate(['/home']);
      }else if(user && user.emailVerified && verificacionU!=='verificado'){
        this.router.navigate(['/inicio']);
      }else{
        this.router.navigate(['/verificar']);
      }
    })
    
  }


}
