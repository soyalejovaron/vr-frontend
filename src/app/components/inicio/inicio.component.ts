import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  // Creamos una variable de tipo "Observable user", donde observaremos los cambios de la interfaz de usuario, para asi,
  // detectar al usuario que se encuentra lugueado en el sistema
  public user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }

}
