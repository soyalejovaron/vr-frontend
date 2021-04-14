import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';
import { User } from '../shared/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: AngularFirestore) { }

  agregarUsuario(usuario: any): Promise<any>{
    return this.firestore.collection('users').add(usuario)
  }

  getUsuarios(): Observable<any>{
    return this.firestore.collection('users', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminarUsuario(uid: string): Promise<any>{
    return this.firestore.collection('users').doc(uid).delete();
  }

  getUsuario(uid: string): Observable<any>{
    return this.firestore.collection('users').doc(uid).snapshotChanges();
  }

  getUser(uid: User): Observable<User>{
    return this.firestore.doc<User>(`users/${uid}`).valueChanges();
  }

  actualizarUsuario(uid: string, data:any): Promise<any> {
    return this.firestore.collection('users').doc(uid).update(data);
  }

}
