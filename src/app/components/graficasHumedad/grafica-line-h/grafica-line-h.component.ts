import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
import { Label } from 'ng2-charts';
import { SensorhumedadService } from 'src/app/services/sensorhumedad.service';
import * as printJS from 'print-js';

@Component({
  selector: 'app-grafica-line-h',
  templateUrl: './grafica-line-h.component.html',
  styleUrls: ['./grafica-line-h.component.scss']
})
export class GraficaLineHComponent implements OnInit {

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
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[];
  public chartColors;

  private categoria;
  private dato: string;
  private datos = [];
  private nombreCategoria = [];
  private colores = [];

  constructor(protected _sensorHumedadService: SensorhumedadService ) {
    this.getCategoria();
  }

  ngOnInit() {
  }

  getCategoria() {
    this._sensorHumedadService.getSensores().subscribe(res => {
      this.categoria = res;
      for (const cate of this.categoria) {
        this.dato = cate.datosSensorH.split(',');
        this.datos.push(this.dato);
        this.nombreCategoria.push(cate.nombreSensorH);
        this.colores.push(cate.colorSensorH);
      }
     
      this.cargarDatos(this.datos, this.nombreCategoria, this.colores);
    });
  }

  print(){
    printJS('grafica', 'html')
  }

  printGrafica(){
    printJS({printable: this.categoria, properties: ['tipoSensorH','nombreSensorH', 'datosSensorH','colorSensorH'],
     type: 'json', header: '<h3 class="custom-h3">Lista de sensores de humedad</h3>',
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
