import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
import { Label } from 'ng2-charts';
import { SensorTemperaturaService } from 'src/app/services/sensor-temperatura.service';
import * as printJS from 'print-js';

@Component({
  selector: 'app-grafica-doughnut-t',
  templateUrl: './grafica-doughnut-t.component.html',
  styleUrls: ['./grafica-doughnut-t.component.scss']
})
export class GraficaDoughnutTComponent implements OnInit {

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
  public barChartType: ChartType = 'doughnut';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[];
  public chartColors;

  private categoria;
  private dato: string;
  private datos = [];
  private nombreCategoria = [];
  private colores = [];
  private tipo = [];

  constructor(protected _sensorTemperaturaService: SensorTemperaturaService ) {
    this.getSensor();
  }

  ngOnInit() {
  }

  getSensor() {
    this._sensorTemperaturaService.getSensores().subscribe(res => {
      this.categoria = res;
      for (const cate of this.categoria) {
        this.dato = cate.datosSensorT.split(',');
        this.datos.push(this.dato);
        this.nombreCategoria.push(cate.nombreSensorT);
        this.colores.push(cate.colorSensorT);
        this.tipo.push(cate.tipoSensorT);
      }
     
      this.cargarDatos(this.datos, this.nombreCategoria, this.colores);
    });
  }

  print(){
    printJS('grafica', 'html')
  }

  printGrafica(){
    printJS({printable: this.categoria, properties: ['tipoSensorT','nombreSensorT', 'datosSensorT','colorSensorT'],
     type: 'json', header: '<h3 class="custom-h3">Lista de sensores de temperatura</h3>',
    style: '.custom-h3 { color: red; text-align: center;  }', documentTitle: 'Vive Registro'})
  }

  cargarDatos(datos, nombreCategoria, colores) {
    this.barChartData = [];
    this.chartColors = [];

    for (const index in datos) {
      this.barChartData.push({ data: datos[index], label: nombreCategoria[index] });
      this.chartColors.push({backgroundColor: colores[index]});
    }

  }

}
