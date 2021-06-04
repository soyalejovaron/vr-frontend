import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EstadoService } from 'src/app/services/estado.service';
import { PlantasService } from 'src/app/services/plantas.service';
import { SensorTemperaturaService } from 'src/app/services/sensor-temperatura.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-datos-temperatura',
  templateUrl: './datos-temperatura.component.html',
  styleUrls: ['./datos-temperatura.component.scss']
})
export class DatosTemperaturaComponent implements OnInit {

   // Lista donde guardaremos todos los registros de humedad que se obtengan de la base de datos
   registros: any = [];
   // Variable donde guardaremos el nombre que recibirá el archivo de excel que sea descargado sobre los datos de humedad
   fileName= 'RegistrosDeTemperatura.xlsx';
   // Configuración necesaria de las Datatables
   dtOptions: DataTables.Settings = {};
   dtTrigger = new Subject();
 
   constructor(protected _sensorTemperaturaService: SensorTemperaturaService , public fb: FormBuilder, private route: ActivatedRoute, private router: Router, private _plantasService: PlantasService) {
  }
 
   ngOnInit(): void {
     // Inicializamos el metodo de obtener registros, con el fin de que sea ejecutado una vez se acceda a este componente
     this.getRegistros();
 
     // Configuración necesaria para ejecutar las Datatables
     this.dtOptions = {
       pagingType: 'full_numbers',
       retrieve: true,
       searching: false,
       pageLength: 6,
       language: {
         url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
       }
     };
   }
 
   ngOnDestroy(): void {
     this.dtTrigger.unsubscribe();
   }
 
   // Metodo para obtener todos los registros que se encuentren en la base de datos a cerca de los datos de humedad
   getRegistros() {
     // Hacemos uso de un servicio para traer dichos registros
     this._sensorTemperaturaService.getRegistros().subscribe(res => {
       // Guardamos estos registros obtenidos en una lista
       this.registros = res;
       this.dtTrigger.next();
     });
   }
 
   // Metodo que convertirá todas las filas y columnas de la tabla en un archivo excel descargable
   exportarExcel(): void
   {
     
     let element = document.getElementById('tablaRegistros');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
  
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
     XLSX.writeFile(wb, this.fileName);
  
   }
 
 
 

}
