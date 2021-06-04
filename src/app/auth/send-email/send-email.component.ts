import { AuthService } from '../services/auth.service';
import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.interface';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
})
export class SendEmailComponent implements OnDestroy {

  // Obtendremos al usuario que se encuentre logueado en la sesión del sistema, lo guardaremos en una variable para luego hacer uso de esta misma
  public user$: Observable<User> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService) {}

  // Metodo que enviará un correo de verificación al usuario
  onSendEmail(): void {
    this.authSvc.sendVerificationEmail();
  }

  // Metodo para destruir la sesión del usuario en el sistema
  ngOnDestroy() {
    this.authSvc.logout();
  }
}
