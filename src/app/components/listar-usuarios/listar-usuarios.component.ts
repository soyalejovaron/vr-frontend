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
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit, OnDestroy {
  
  usuarios: any[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  fileName= 'InformeUsuarios_ViveRegistro.xlsx';

  constructor(private _usuarioService: UsuarioService, private toastr: ToastrService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getUsuarios();
    this.dtOptions = {
      pagingType: 'full_numbers',
      retrieve: true,
      pageLength: 4,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
      }
    };

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  exportarExcel(): void
  {
    
    let element = document.getElementById('tablaUsuarios');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    XLSX.writeFile(wb, this.fileName);
 
  }
  
  
  getUsuarios() {
    this._usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = [];
      data.forEach((element:any) => {
        this.usuarios.push({
          uid: element.payload.doc.uid,
          ...element.payload.doc.data()
        },
        )
      });
      this.dtTrigger.next();
      
      
    });
  }
  
  
  print(){
    printJS({printable: this.usuarios, properties: ['documento', 'displayName', 'email', 'role', 'estado'],
    type: 'json', header: '<h3 class="custom-h3">Lista de usuarios</h3>',
    style: '.custom-h3 { color: red; text-align: center;  }', documentTitle: 'Vive Registro'})
  }


  eliminarUsuario(uid: string) {
    this._usuarioService.eliminarUsuario(uid).then(() =>{
      window.location.reload();
      this.toastr.error('Usuario eliminado', 'Todo ha ido con exito!',{
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    })
  }

}
