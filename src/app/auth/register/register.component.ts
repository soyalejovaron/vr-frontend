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

  // Creamos una variable de tipo FormGroup, donde guardaremos la información que venga de cada uno de los campos del formulario HTML
  usuarioRegistrar: FormGroup;
  usuario: any;
  submitted = false;
  confirmar = false;
 
  constructor(private authSvc: AuthService, private router: Router, private toastr: ToastrService, private fb: FormBuilder) {
    // Ahora, guardaremos y requeriremos cada uno de los campos del formulario, para poder agruparlos en una misma variable
    this.usuarioRegistrar = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmarPassword: ['', Validators.required],
    })
    
  }

  // Cremoas un metodo para validar el registrar y consecutivamente, para registrar al usuario en la base de datos
  async onRegister() {
    this.submitted= true;
    // Verificamos si el formulario fue llenado correctamente, o sea, si se llenaron todos los campos que fueron pedidos, de no ser así, no se le dejará registrar al usuario
    if(this.usuarioRegistrar.invalid){
      return;
    }
    // Validamos si los campos de contraseña y el de verificar contraseña son iguales, en caso de que no, no se le permitirá registrar al usuario
    if(this.usuarioRegistrar.value.password !== this.usuarioRegistrar.value.confirmarPassword){
      this.confirmar=true;
      return;
    }

    // En una constante guardaremos el email y el password del usuario que envié a través del formulario
    const { email, password } = this.usuarioRegistrar.value;
    // Encerraremos la sentencia en un Try Catch para capturar los errores que se presenten al registrar al usuario
    try {
      // Haremos uso del metodo registrar con email y password que nos proporciona Firebase, consecuente, guardaremos ese resultado en una variable
      const user = await this.authSvc.register(email, password);
      // Validamos si el usuario se creó, en caso de ser así, lo enviaremos al metodo de verificar usuario
      if (user) {
        this.checkUserIsVerified(user);
      // Si el registro no se dió, le mostraremos un mensaje indicandole que el correo ya existe en la base de datos
      } else{
        this.toastr.error('Elige otro por favor', 'El correo ya existe',{
          positionClass: 'toast-bottom-right'
        });
      }
    // Capturamos los errores que se presenten al ejecutar la sentencia en el "Try"
    } catch (error) {
      console.log(error);
    }
  }

  // Validamos si el usuario que se registró se encuentra validado en la base de datos, de no ser así, lo cual sería lo que deberia de pasar, se enviará al componente para que pueda hacer el proceso de verificación
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
