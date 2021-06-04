// Libreria y dependecias del componente
import { AuthService } from '../services/auth.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  // Instanciamos FormControl para poder obtener la informacion del campo del email, que se ubica en el html
  userEmail = new FormControl('');

  constructor(private authSvc: AuthService, private router: Router) {}

  // Creamos el metodo de reset, el cual se encargará de enviar un correo al usuario, donde habrá un link para
  //poder poner la nueva contraseña y cambiar la antigua de la base de datos
  async onReset() {
    // Encerramos la sentencia en un Try catch, para capturar los errores que se presenten a la hora de enviar el correo
    try {
      // Constante que almancenará el valor que llegue del campo de email en el html
      const email = this.userEmail.value;
      // Usamos el metodo de resetear contraseña que proporciona firebase, y por parametro le pasamos el email del usuario ingresado
      await this.authSvc.resetPassword(email);
      // Una vez se envie el correo, se mostrará un mensaje y se retornará al usuario al componente "login"
      window.alert('Email Enviado, Revisa tu correo');
      this.router.navigate(['/login']);
      // Aqui capturamos los errores que se presenten en el envio del correo y lo mostramos por consola
    } catch (error) {
      console.log(error);
    }
  }
}
