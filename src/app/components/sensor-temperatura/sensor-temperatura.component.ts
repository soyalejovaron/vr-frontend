import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EstadoService } from 'src/app/services/estado.service';
import { PlantasService } from 'src/app/services/plantas.service';
import { SensorTemperaturaService } from 'src/app/services/sensor-temperatura.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-sensor-temperatura',
  templateUrl: './sensor-temperatura.component.html',
  styleUrls: ['./sensor-temperatura.component.scss']
})
export class SensorTemperaturaComponent implements OnInit, OnDestroy {
  sensores: any = [];
  plantas: any;
  estados: any;
  estado: any;
  planta: any;
  color = "black";
  fechaModificacion: Date;
  sensorForm: FormGroup;
  sensor: any;
  nombreS: string;
  tipoS: string;
  datosS: string;
  estadoS: any;
  idSensor: string;
  textButton: string;
  fileName= 'SensoresTemperatura.xlsx';
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(protected _sensorTemperaturaService: SensorTemperaturaService , public fb: FormBuilder, private route: ActivatedRoute, private router: Router, private _plantasService: PlantasService, private _estadosService: EstadoService) {
    this.textButton = "Añadir";
    this.obtenerParametroUrl();
    this.sensorForm = this.fb.group({
      idSensor: [''],
      tipoSensor: ['Temperatura', Validators.required],
      nombreSensor: ['', Validators.required],
      colorSensor: [''],
      plantaSensor: [''],
    });
  }

  ngOnInit(): void {
    this.getSensores();
    
    this._plantasService.getPlantas().subscribe(resp => {
      this.plantas = resp;
    },
      error => { console.error(error) }
    );

    this._estadosService.getEstados().subscribe(resp => {
      this.estados = resp;
    },
      error => { console.error(error) }
    );

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
    
    let element = document.getElementById('tablaTemperatura');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    XLSX.writeFile(wb, this.fileName);
 
  }


  obtenerParametroUrl() {
    this.route.paramMap.subscribe(params => {
      this.idSensor = params.get('idSensor');
      if (this.idSensor) {
        this._sensorTemperaturaService.getSensor(this.idSensor).subscribe(res => {
          this.color = res[0].colorSensorT;
          this.nombreS = res[0].nombreSensorT;
          this.tipoS = res[0].tipoSensorT;
          this.planta = res[0].id_planta;
          this.sensorForm.patchValue({
            idSensor: [this.idSensor],
            tipoSensor: [this.tipoS],
            nombreSensor: [this.nombreS],
            colorSensor: [this.color],
            plantaSensor: [this.planta],
          });
          this.textButton = "Actualizar";
        });
      }
    });
  }

  getSensores() {
    this._sensorTemperaturaService.getSensores().subscribe(res => {
      this.sensores = res;
      this.dtTrigger.next();
    });
  }

  agregarSensor() {
      this.sensorForm.controls['colorSensor'].setValue(this.color);

      if (!this.idSensor) {
      this._sensorTemperaturaService.guardarSensor(this.sensorForm.value).subscribe(res => {
        this.getSensores();
        window.location.reload();
      });
    }
    else {
      this._sensorTemperaturaService.actualizarSensor(this.sensorForm.value).subscribe(res =>{
        this.getSensores();
        this.router.navigate(['/temperatura']);
      });
    }
  }

  borrarSensor(idSensor) {
    this._sensorTemperaturaService.borrarSensor(idSensor).subscribe(res => {
      this.getSensores();
      window.location.reload();
    })
  }

}
