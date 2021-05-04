import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EstadoService } from 'src/app/services/estado.service';
import { PlantasService } from 'src/app/services/plantas.service';
import { SensorhumedadService } from 'src/app/services/sensorhumedad.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-sensor-humedad',
  templateUrl: './sensor-humedad.component.html',
  styleUrls: ['./sensor-humedad.component.scss']
})
export class SensorHumedadComponent implements OnInit, OnDestroy {

  sensores: any = [];
  plantas: any;
  planta: any;
  estados: any;
  estado: any;
  color = "black";
  sensorForm: FormGroup;
  sensor: any;
  nombreS: string;
  tipoS: string;
  datosS: string;
  estadoS: any;
  idSensor: string;
  textButton: string;
  fileName= 'SensoresHumedad.xlsx';
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(protected _sensorHumedadService: SensorhumedadService , public fb: FormBuilder, private route: ActivatedRoute, private router: Router, private _plantasService: PlantasService, private _estadosService: EstadoService) {
    this.textButton = "Añadir";
    this.obtenerParametroUrl();
    this.sensorForm = this.fb.group({
      idSensor: [''],
      tipoSensor: ['Humedad', Validators.required],
      nombreSensor: ['', Validators.required],
      colorSensor: [''],
      plantaSensor: [''],
      estadoSensor: ['', Validators.required],
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
    
    let element = document.getElementById('tablaHumedad');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    XLSX.writeFile(wb, this.fileName);
 
  }


  obtenerParametroUrl() {
    this.route.paramMap.subscribe(params => {
      this.idSensor = params.get('idSensor');
      if (this.idSensor) {
        this._sensorHumedadService.getSensor(this.idSensor).subscribe(res => {
          this.color = res[0].colorSensorH;
          this.nombreS = res[0].nombreSensorH;
          this.tipoS = res[0].tipoSensorH;
          this.estadoS = res[0].id_estado;
          this.planta = res[0].id_planta;
          this.sensorForm.patchValue({
            idSensor: [this.idSensor],
            tipoSensor: [this.tipoS],
            nombreSensor: [this.nombreS],
            colorSensor: [this.color],
            plantaSensor: [this.planta],
            estadoSensor: [this.estadoS]
          });
          this.textButton = "Actualizar";
        });
      }
    });
  }

  getSensores() {
    this._sensorHumedadService.getSensores().subscribe(res => {
      this.sensores = res;
      this.dtTrigger.next();
    });
  }

  agregarSensor() {
      this.sensorForm.controls['colorSensor'].setValue(this.color);

      if (!this.idSensor) {
      this._sensorHumedadService.guardarSensor(this.sensorForm.value).subscribe(res => {
        this.getSensores();
        window.location.reload();
      });
    }
    else {
      this._sensorHumedadService.actualizarSensor(this.sensorForm.value).subscribe(res =>{
        this.getSensores();
        this.router.navigate(['/humedad']);
      });
    }
  }

  borrarSensor(idSensor) {
    this._sensorHumedadService.borrarSensor(idSensor).subscribe(res => {
      this.getSensores();
      window.location.reload();
    })
  }

}
