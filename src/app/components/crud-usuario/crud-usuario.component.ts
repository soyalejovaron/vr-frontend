import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as printJS from 'print-js';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-crud-usuario',
  templateUrl: './crud-usuario.component.html',
  styleUrls: ['./crud-usuario.component.scss']
})
export class CrudUsuarioComponent implements OnInit, OnDestroy {

  // Variables donde requeriremos e instanciaremos algunas clases y metodos
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  usuarios: any[]= [];
  fileName= 'InformeUsuarios_ViveRegistro.xlsx';
  
  constructor(private _usuarioService: UsuarioService, private toastr: ToastrService, private router: Router) { 
    
  }

  ngOnInit(): void {
    // Inicializamos el metodo de obtener usuarios, para poder traer todos los registros de la base de datos una vez se ejecute el componente "crud"
    this.getUsuarios();

    // Configuraciones necesarias para ejecutar el Datatable
    this.dtOptions = {
      pagingType: 'full_numbers',
      retrieve: true,
      pageLength: 3,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
      }
    };
  }

  // Hacemos una dessuscripcion una vez se carguen los datos de la tabla
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  // Metodo donde consumiremos el servicio de obtener los usuarios, hacemos una subscripcion y guardamos los resultados en una array
  getUsuarios() {
    this._usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = [];
      // Ejecutamos el metodo "forEach", el cual nso ayudará a recorrer todo el array que contiene todos los registros de los usuarios
      // Donde haremos un push, o sea, una inserción, en el array una vez se encuentre un nuevo usuario
      data.forEach((element:any) => {
        this.usuarios.push({
          uid: element.payload.doc.uid,
          ...element.payload.doc.data()
        },
        )});
      // Configuracion requerida para ejecutar el Datatable
      this.dtTrigger.next();
      
    });
  }

  // Metodo que nos permitirá hacer uso de una tabla de excel, donde pasaremos un id de la tabla, y él mismo se encargará
  // De agarrar cada fila y columna, para convertilos en una tabla descargable de excel
  exportarExcel(): void
    {
      let element = document.getElementById('tablaUsuarios');
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
   
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   
      XLSX.writeFile(wb, this.fileName);
   
    }
  
  // Metodo para poder imprimir en formato PDF un archivo Json que contenga todos los datos que necesitemos del usuario 
  print(){
    printJS({printable: this.usuarios, properties: ['documento', 'displayName', 'email', 'role', 'estado'],
    type: 'json', header: '<h3 class="custom-h3">Lista de usuarios</h3>',
    style: '.custom-h3 { color: red; text-align: center;  }', documentTitle: 'Vive Registro'})
  }

  // Metodo para eliminar un usuario por medio del id, donde consumiremos un servicio que nos haga este trabajo, y como respuesta, mostraremos un mensaje de exito
  eliminarUsuario(uid: string) {
    this._usuarioService.eliminarUsuario(uid).then(() =>{
      this.toastr.error('Usuario eliminado', 'Todo ha ido con exito!',{
        positionClass: 'toast-bottom-right'
      });
      // Recargamos la pagina actual una vez se termine de eliminar el usuario, con el fin de no causar errores de incompatibilidad con las Datatables
      window.location.reload();
    }).catch(error => {
      console.log(error);
    })
  }



}
