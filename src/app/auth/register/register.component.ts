import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  usuarioRegistrar: FormGroup;
  usuario: any;
  submitted = false;
  confirmar = false;
 
  constructor(private authSvc: AuthService, private router: Router, private toastr: ToastrService, private fb: FormBuilder) {
    this.usuarioRegistrar = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmarPassword: ['', Validators.required],
    })
    
  }

  async onRegister() {
    this.submitted= true;
    if(this.usuarioRegistrar.invalid){
      return;
    }

    if(this.usuarioRegistrar.value.password !== this.usuarioRegistrar.value.confirmarPassword){
      this.confirmar=true;
      return;
    }

    const { email, password } = this.usuarioRegistrar.value;
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        this.checkUserIsVerified(user);
      } else{
        this.toastr.error('Elige otro por favor', 'El correo ya existe',{
          positionClass: 'toast-bottom-right'
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  private checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {
      this.router.navigate(['/home']);
    } else if (user) {
      this.router.navigate(['/verificar']);
    } else {
      this.router.navigate(['/register']);
      
    }
  }
}
