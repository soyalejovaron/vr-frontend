import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { User } from '../shared/models/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user$: Observable<User> = this.authSvc.afAuth.user;
  public secciones: Array<string> = ['primera'];
  constructor(public authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}
