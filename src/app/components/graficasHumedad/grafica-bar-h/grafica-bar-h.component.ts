import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
import { Label } from 'ng2-charts';
import { SensorhumedadService } from 'src/app/services/sensorhumedad.service';
import * as printJS from 'print-js';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-grafica-bar-h',
  templateUrl: './grafica-bar-h.component.html',
  styleUrls: ['./grafica-bar-h.component.scss']
})
export class GraficaBarHComponent implements OnInit {

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
  public barChartType: ChartType = 'bar';
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

  constructor(protected _sensorHumedadService: SensorhumedadService, private toastr: ToastrService ) {
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
        this.tipo.push(cate.tipoSensorH);
      }

      this.cargarDatos(this.datos, this.nombreCategoria, this.colores);
    });
  }

  print(){
    printJS('grafica', 'html')
  }

  mensajeFinal(){
    window.alert('Tu archivo está listo para imprimirse')
  }


  printGrafica(){
    printJS({printable: this.categoria, properties: [
      { field: 'idSensorH', displayName: 'Id'},
      { field: 'nombreSensorH', displayName: 'Nombre Del Sensor'},
      { field: 'tipoSensorH', displayName: 'Tipo Del Sensor'},
      { field: 'id_planta', displayName: 'Id planta'},
      { field: 'id_estado', displayName: 'Id estado'}
        ],
     type: 'json', header: '<h3 class="custom-h3">Sensores de humedad</h3>',
    style: '.custom-h3 { margin-top: 50px; color: black; text-align: center;text-shadow: 2px 15px 3px #3971A5;border-left: 2px solid black; border-right: 2px solid black; font-size: 25px; }'
    , documentTitle: 'Vive Registro',
    gridHeaderStyle: 'border: 2px solid black; color: black;',
	  gridStyle: 'border: 2px solid gray; text-align:center; ', showModal: true, modalMessage: 'Por favor espera...', 
    onLoadingEnd: this.mensajeFinal
  })
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
