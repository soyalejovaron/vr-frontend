import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
import { Label } from 'ng2-charts';
import { SensorTemperaturaService } from 'src/app/services/sensor-temperatura.service';
import * as printJS from 'print-js';

@Component({
  selector: 'app-grafica-horizontalbar-t',
  templateUrl: './grafica-horizontalbar-t.component.html',
  styleUrls: ['./grafica-horizontalbar-t.component.scss']
})
export class GraficaHorizontalbarTComponent implements OnInit {

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
  public barChartLabels: Label[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  public barChartType: ChartType = 'radar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[];
  public chartColors;

  private sensor;
  private dato: string;
  private datos = [];
  private nombreSensor = [];
  private colores = [];
  private tipo = [];

  constructor(protected _sensorTemperaturaService: SensorTemperaturaService ) {
    this.getSensor();
  }

  ngOnInit() {
  }

  getSensor() {
    this._sensorTemperaturaService.getSensores().subscribe(res => {
      this.sensor = res;
      for (const s of this.sensor) {
        this.dato = s.datosSensorT.split(',');
        this.datos.push(this.dato);
        this.nombreSensor.push(s.nombreSensorT);
        this.colores.push(s.colorSensorT);
        this.tipo.push(s.tipoSensorT);
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
      { field: 'id_planta', displayName: 'Id planta'},
      { field: 'id_estado', displayName: 'Id estado'}
        ],
     type: 'json', header: '<h3 class="custom-h3">Sensores de temperatura</h3>',
    style: '.custom-h3 { margin-top: 50px; color: black; text-align: center;text-shadow: 2px 15px 3px #dc3545;border-left: 2px solid black; border-right: 2px solid black; font-size: 25px; }'
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
