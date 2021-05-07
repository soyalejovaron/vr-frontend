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

  registros: any = [];
  fileName= 'RegistrosDeTemperatura.xlsx';
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(protected _sensorTemperaturaService: SensorTemperaturaService , public fb: FormBuilder, private route: ActivatedRoute, private router: Router, private _plantasService: PlantasService) {
  }

  ngOnInit(): void {
    this.getRegistros();

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

  getRegistros() {
    this._sensorTemperaturaService.getRegistros().subscribe(res => {
      this.registros = res;
      this.dtTrigger.next();
    });
  }

  exportarExcel(): void
  {
    
    let element = document.getElementById('tablaRegistros');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    XLSX.writeFile(wb, this.fileName);
 
  }



}
