import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
import { Label } from 'ng2-charts';
import { SensorhumedadService } from 'src/app/services/sensorhumedad.service';
import * as printJS from 'print-js';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-graficas-humedad',
  templateUrl: './graficas-humedad.component.html',
  styleUrls: ['./graficas-humedad.component.scss']
})
export class GraficasHumedadComponent implements OnInit {

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
  public tipoG:any = this.aRoute.snapshot.paramMap.get('tipo');
  public barChartType: ChartType = this.tipoG;
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[];
  public chartColors;

  private sensor;
  public idSensor:any;
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
  

  constructor(private aRoute: ActivatedRoute, protected _sensorHumedadService: SensorhumedadService, private toastr: ToastrService ) {
    this.getSensor();
    this.getRegistro();
    this.idSensor = this.aRoute.snapshot.paramMap.get('idSensor');
  }
  
  ngOnInit() {
    
  }

  getRegistro() {
    this._sensorHumedadService.getRegistros().subscribe(res => {
      this.registro = res;
      for (const s of this.registro) {
        if(s.idSensorH == 1 && this.idSensor==1){
          this.fechas.push(s.fechaRegistroH)
          this.registroSensor1.push(s.porcentajeH)
        }else if(s.idSensorH == 2 && this.idSensor==2){
          this.fechas.push(s.fechaRegistroH)
          this.registroSensor2.push(s.porcentajeH)
        }else if(s.idSensorH == 3 && this.idSensor==3){
          this.fechas.push(s.fechaRegistroH)
          this.registroSensor3.push(s.porcentajeH)
        }else if(s.idSensorH == 4 && this.idSensor==4){
          this.fechas.push(s.fechaRegistroH)
          this.registroSensor4.push(s.porcentajeH)
        }
      }
    });
  }



  getSensor() {
    this._sensorHumedadService.getSensores().subscribe(res => {
      this.sensor = res;
      for (const s of this.sensor) {
        if (s.idSensorH == 1 && this.idSensor == 1) {
          this.datos.push(this.registroSensor1);
          this.nombreSensor.push(s.nombreSensorH);
          this.colores.push(s.colorSensorH);
          this.tipo.push(s.tipoSensorH);
        }else if (s.idSensorH == 2 && this.idSensor == 2) {
          this.datos.push(this.registroSensor2);
          this.nombreSensor.push(s.nombreSensorH);
          this.colores.push(s.colorSensorH);
          this.tipo.push(s.tipoSensorH);
        }else if (s.idSensorH == 3 && this.idSensor == 3) {
          this.datos.push(this.registroSensor3);
          this.nombreSensor.push(s.nombreSensorH);
          this.colores.push(s.colorSensorH);
          this.tipo.push(s.tipoSensorH);
        }else if (s.idSensorH == 4 && this.idSensor == 4) {
          this.datos.push(this.registroSensor4);
          this.nombreSensor.push(s.nombreSensorH);
          this.colores.push(s.colorSensorH);
          this.tipo.push(s.tipoSensorH);
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
      { field: 'idSensorH', displayName: 'Id'},
      { field: 'nombreSensorH', displayName: 'Nombre Del Sensor'},
      { field: 'tipoSensorH', displayName: 'Tipo Del Sensor'},
      { field: 'plantaSensorH', displayName: 'Nombre Planta'},
      { field: 'fechaCreacionH', displayName: 'Fecha De Creación'}
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
