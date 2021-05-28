import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
import { Label } from 'ng2-charts';
import { SensorTemperaturaService } from 'src/app/services/sensor-temperatura.service';
import * as printJS from 'print-js';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grafica-radar-t',
  templateUrl: './grafica-radar-t.component.html',
  styleUrls: ['./grafica-radar-t.component.scss']
})
export class GraficaRadarTComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  private fechas = [];
  public barChartLabels: Label[] = this.fechas;
  public barChartType: ChartType = 'radar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[];
  public chartColors;

  private sensor;
  private registro;
  private dato: string;
  private datos = [];
  private nombreSensor = [];
  private colores = [];
  private tipo = [];
  private registroSensor1 = [];
  private registroSensor2 = [];
  private registroSensor3 = [];
  private registroSensor4 = [];

  private r: string;
  private registros = [];
  

  constructor(protected _sensorTemperaturaService: SensorTemperaturaService, private toastr: ToastrService ) {
    this.getSensor();
    this.getRegistro();
  }

  ngOnInit() {
  }

  getRegistro() {
    this._sensorTemperaturaService.getRegistros().subscribe(res => {
      this.registro = res;
      for (const s of this.registro) {
        if(s.idSensorT == 1){
          this.fechas.push(s.fechaRegistroT)
          this.registroSensor1.push(s.porcentajeT)
        }else if(s.idSensorT == 2){
          this.registroSensor2.push(s.porcentajeT)
        }else if(s.idSensorT == 3){
          this.registroSensor3.push(s.porcentajeT)
        }else if(s.idSensorT == 4){
          this.registroSensor4.push(s.porcentajeT)
        }
      }
    });
  }

  getSensor() {
    this._sensorTemperaturaService.getSensores().subscribe(res => {
      this.sensor = res;
      for (const s of this.sensor) {
        if (s.idSensorT == 1) {
          this.datos.push(this.registroSensor1);
          this.nombreSensor.push(s.nombreSensorT);
          this.colores.push(s.colorSensorT);
          this.tipo.push(s.tipoSensorT);
        }else if (s.idSensorT == 2) {
          this.datos.push(this.registroSensor2);
          this.nombreSensor.push(s.nombreSensorT);
          this.colores.push(s.colorSensorT);
          this.tipo.push(s.tipoSensorT);
        }else if (s.idSensorT == 3) {
          this.datos.push(this.registroSensor3);
          this.nombreSensor.push(s.nombreSensorT);
          this.colores.push(s.colorSensorT);
          this.tipo.push(s.tipoSensorT);
        }else if (s.idSensorT == 4) {
          this.datos.push(this.registroSensor4);
          this.nombreSensor.push(s.nombreSensorT);
          this.colores.push(s.colorSensorT);
          this.tipo.push(s.tipoSensorT);
        } 
        
      }

      this.cargarDatos(this.datos, this.nombreSensor, this.colores);
    });
  }

  print(){
    printJS('grafica', 'html')
  }

  mensajeFinal(){
    window.alert('Tu archivo está listo para imprimirse')
  }


  printGrafica(){
    printJS({printable: this.sensor, properties: [
      { field: 'idSensorT', displayName: 'Id'},
      { field: 'nombreSensorT', displayName: 'Nombre Del Sensor'},
      { field: 'tipoSensorT', displayName: 'Tipo Del Sensor'},
      { field: 'plantaSensorT', displayName: 'Nombre Planta'},
      { field: 'fechaCreacionT', displayName: 'Fecha De Creación'}
        ],
     type: 'json', header: '<h3 class="custom-h3">Sensores de humedad</h3>',
    style: '.custom-h3 { margin-top: 50px; color: black; text-align: center;text-shadow: 2px 15px 3px #3971A5;border-left: 2px solid black; border-right: 2px solid black; font-size: 25px; }'
    , documentTitle: 'Vive Registro',
    gridHeaderStyle: 'border: 2px solid black; color: black;',
	  gridStyle: 'border: 2px solid gray; text-align:center; ', showModal: true, modalMessage: 'Por favor espera...', 
    onLoadingEnd: this.mensajeFinal
  })
  }

  cargarDatos(datos, nombreSensor, colores) {
    this.barChartData = [];
    this.chartColors = [];

    for (const index in datos) {
      this.barChartData.push({ data: datos[index], label: nombreSensor[index] });
      this.chartColors.push({backgroundColor: colores[index]});
    }

  }


}
