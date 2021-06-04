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
  // Creamos una variable de tipo observable<user>, donde se observarán los cambios que lleguen a la interfaz del usuario
  // o sea, se observará que usuario es que está accediendo
  public user$: Observable<User> = this.authSvc.user$;
  submitted = false;
  confirmarLogin = false;
  // Creamos una variable de tipo FormGroup, la cual guardará los datos que lleguen del formulario HTML
  usuarioLogin: FormGroup;

  
  constructor(private _usuarioService: UsuarioService ,private authSvc: AuthService, private router: Router, private toastr: ToastrService, private fb: FormBuilder) {
    // Guardamos los campos del formulario HTML, ademas, le agregamos validators, donde se valide si los campos requeridos si contengan información
    this.usuarioLogin = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }

  // Metodo para loguearse por modalidad "Google"
  async onGoogleLogin() {
    // Encerramos la sentencia en un Try Catch para capturar errores en la ejecución de la sentencia
    try {
      // En una contante guardamos el metodo que nos proporciona Firebase para loguearse con Google
      const user = await this.authSvc.loginGoogle();
      if (user) {
        // Validamos si el usuario existe, en caso de ser así, le mostraremos un mensaje y lo llevaremos al sistema
        this.checkUserIsVerified(user);
        this.toastr.success(user.displayName,'!Bienvenido a ViveRegistro!',{
          positionClass: 'toast-bottom-right'
        });
      }
      // Capturamos y mostramos los errores que se presenten al ejecutar el "Try" 
    } catch (error) {
      console.log(error);
    }
  }

  // Metodo para loguear un usuario
  async onLogin() {
    // Encerramos la sentencia en un Try Catch para capturar los errores al ejecutar la sentencia
    try {

      this.submitted= true;
    // Validamos si el formulario es valido o no, o sea, si los campos que se requirieron si han llegado con información
    // En caso de no ser así, no se le permitirá enviar la información ni acceder
    if(this.usuarioLogin.invalid){
      return;
    }
    //En una constante guardamos el email y el password que se almacenen en el FormGroup del HTML
    const { email, password } = this.usuarioLogin.value;
    // En una constante guardamos el resultado de usar el metodo  "login" que nos proporciona Firebase, luego de pasarle tanto el email como el password
    const user = await this.authSvc.login(email, password);
    // Validamos si el usuario existe en la base de datos, de ser asi, lo enviamos al metodo "checkUserIsVerified"
      if(user){
        this.checkUserIsVerified(user);
      } else{
        // En caso de no ser así, no se le dará acceso
        this.confirmarLogin=true;
      }
    // Capturamos los errores que se presenten a la hora de ejecutar la sentencia
    } catch (error) {
      console.log(error);
    }
    
  }

  // Aqui haremos las validaciones necesarias para poder ingresar al usuario
  private checkUserIsVerified(user: User) {
    // Accederemos al servicio de "getUsuario", donde traeremos desde la Base de datos al usuario con el Id correspondiente a la sesión
    let uid=user.uid;
    // Le pasamos el Id al metodo, y hacemos una suscripcion, para poder acceder a los datos del usuario correspondiente a ese Id
    this._usuarioService.getUsuario(uid).subscribe(data => {
      // Accederemos a los datos correspondientes al usuario que se está trayendo en el metodo get
      // Accederemos al campo "verificacion", y guardaremos el resultado en una variable
      let verificacionU= data.payload.data()['verificacion'];
      // Validamos 3 cosas, si el usuario existe, si está verificado, y si la verificacion de "primera vez en el sistema" se encuentra en estado "verificado"
      if(user && user.emailVerified && verificacionU){
        this.router.navigate(['/home']);
      // Validamos 3 cosas, si el usuario existe, si está verificado, y si la verificacion de "primera vez en el sistema" se encuentra en estado "no verificado"
      }else if(user && user.emailVerified && !verificacionU){
        this.router.navigate(['/inicio']);
      }else{
        // Si no entra en ninguna de las dos validaciones, es porque el usuario se encuentra en estado de validación, y se le llevará al componente de verificar
        this.router.navigate(['/verificar']);
      }
    })
    
  }


}
