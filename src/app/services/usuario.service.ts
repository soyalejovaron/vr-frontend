import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';
import { User } from '../shared/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // Hacemos una inyección de AngularFirestore en el constructor para hacer uso de este modulo en la clase
  constructor(private firestore: AngularFirestore) { }

  // Metodo que nos permitirá agregar un nuevo usuario a la base de datos
  // Como parametro le daremos un usuario, el cual contendrá todos los datos que haran parte del usuario
  agregarUsuario(usuario: any): Promise<any>{
    // Para poder acceder a la base de datos, hacemos uso de Firestore, donde solo indicaremos el nombre de la collection y el metodo que se requiere
    return this.firestore.collection('users').add(usuario)
  }

  // Metodo que nos permitirá traer todos los usuarios que se encuentren la collection indicada, ademas, una vez se traigan esos registros, se guardaran
  getUsuarios(): Observable<any>{
    return this.firestore.collection('users').snapshotChanges();
  }
  
  // Metodo que nos permitirá eliminar un usuario indicandole el id a eliminar
  // para ello, usamos firestore, donde indicaremos el nombre de la collection a la cual queremos ingresar, al documento pasandole el id, y guardamos estos resultados
  eliminarUsuario(uid: string): Promise<any>{
    return this.firestore.collection('users').doc(uid).delete();
  }

  // Metodo que nos permitirá traer un solo usuario de la base de datos, lo cual haremos indicando el id de ese usuario
  // para ello, indicamos la collection que deseamos manipular, el documento y su id correspondiente, y el metodo que nos guardará estos resultados
  getUsuario(uid: string): Observable<any>{
    return this.firestore.collection('users').doc(uid).snapshotChanges();
  }

  /* getUser(uid: User): Observable<User>{
    return this.firestore.doc<User>(`users/${uid}`).valueChanges();
  } */

  // Metodo que nos permitirá actualizar un usuario por medio de un id y un usuario que contenga los datos a cambiar
  actualizarUsuario(uid: string, data:any): Promise<any> {
    // Haremos una llamado de la collection que deseamos modificar, le indicamos el id del documento, y por ultimo, indicamos el metodo a accionar, en este caso seria el update
    return this.firestore.collection('users').doc(uid).update(data);
  }

  /* actualizarUsuarioPorCorreo(uid: string, data:any): Promise<any> {
    return this.firestore.collection('users').doc(uid).update(data);
  } */

}
