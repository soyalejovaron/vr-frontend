import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/shared/models/user.interface';
import { SensorTemperaturaService } from 'src/app/services/sensor-temperatura.service';
import { SensorLluviaService } from 'src/app/services/sensor-lluvia.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { SensorhumedadService } from 'src/app/services/sensorhumedad.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user$: Observable<User> = this.authSvc.afAuth.user;
  
  valvula:string = "Apagado"
  bateria:string = "Apagado"
  panel:string = "Apagado"
  idSensor:string = "1";
  estadoLluvia:string = "Apagado";
  lluvia:string = "No";
  tanqueAgua:string = "50%" 

  temperatura1:string = "0°c";
  temperatura2:string = "0°c";
  temperatura3:string = "0°c";
  temperatura4:string = "0°c";

  humedad1:string = "0%";
  humedad2:string = "0%";
  humedad3:string = "0%";
  humedad4:string = "0%";

  estado1:string = "Apagado";
  estado2:string = "Apagado";
  estado3:string = "Apagado";
  estado4:string = "Apagado";

  
  constructor(private _usuarioService: UsuarioService, private fb: FormBuilder,private aRoute: ActivatedRoute, private route: ActivatedRoute, private router: Router, public authSvc: AuthService, private toastr: ToastrService, protected _sensorHumedadService: SensorhumedadService,
     protected _sensorTemperaturaService: SensorTemperaturaService, protected _sensorLluviaService: SensorLluviaService) {
  
      }


  ngOnInit(): void {
    
  }

  activarSistema(){  
    this._sensorLluviaService.getRegistrosLluvia().subscribe(res => {
      this.estadoLluvia = res[0].descripcionL;
      if(this.estadoLluvia != "No se ha detectado lluvia"){
        this.tanqueAgua="Llenando...";
      }
    });
    this.lluvia= "Si";
    this.valvula = "Activado";
    this.bateria = "Activado";
    this.panel = "Conectado";
    this.toastr.success('El sistema ha sido activado', 'Sistema del vivero encendido',{
      positionClass: 'toast-bottom-right'
    });
  }

  desactivarSistema(){
    this.tanqueAgua="50%";
    this.estadoLluvia="Apagado";
    this.lluvia="No";
    this.valvula = "Apagado";
    this.bateria = "Apagado";
    this.panel = "Apagado";
    this.toastr.error('El sistema ha sido desactivado', 'Sistema del vivero apagado',{
      positionClass: 'toast-bottom-right'
    });
  }

  activarLinea1(){
    this._sensorHumedadService.getRegistro().subscribe(res => {
      this.humedad1 = res[0].porcentajeH + "%";
    });
    this._sensorTemperaturaService.getRegistro().subscribe(res => {
      this.temperatura1 = res[0].porcentajeT + "°c";
    });
    
    this.estado1 = "Activado";
    this.toastr.success('', 'Linea de riego 1 encendida',{
      positionClass: 'toast-bottom-right'
    });
  }

  activarLinea2(){
    this.estado2 = "Activado";
    this.temperatura2 = "10°c";
    this.humedad2 = "15%";
    this.toastr.success('', 'Linea de riego 2 encendida',{
      positionClass: 'toast-bottom-right'
    });
  }

  activarLinea3(){
    this.estado3 = "Activado";
    this.temperatura3 = "30°c";
    this.humedad3 = "52%";
    this.toastr.success('', 'Linea de riego 3 encendida',{
      positionClass: 'toast-bottom-right'
    });
  }

  activarLinea4(){
    this.estado4 = "Activado";
    this.temperatura4 = "38°c";
    this.humedad4 = "85%";
    this.toastr.success('', 'Linea de riego 4 encendida',{
      positionClass: 'toast-bottom-right'
    });
  }

  desactivarLinea1(){
    this.estado1 = "Apagado";
    this.temperatura1 = "0°c";
    this.humedad1 = "0%";
    this.toastr.error('', 'Linea de riego 1 apagada',{
      positionClass: 'toast-bottom-right'
    });
  }

  desactivarLinea2(){
    this.estado2 = "Apagado";
    this.temperatura2 = "0°c";
    this.humedad2 = "0%";
    this.toastr.error('', 'Linea de riego 2 apagada',{
      positionClass: 'toast-bottom-right'
    });
  }

  desactivarLinea3(){
    this.estado3 = "Apagado";
    this.temperatura3 = "0°c";
    this.humedad3 = "0%";
    this.toastr.error('', 'Linea de riego 3 apagada',{
      positionClass: 'toast-bottom-right'
    });
  }

  desactivarLinea4(){
    this.estado4 = "Apagado";
    this.temperatura4 = "0°c";
    this.humedad4 = "0%";
    this.toastr.error('', 'Linea de riego 4 apagada',{
      positionClass: 'toast-bottom-right'
    });
  }

  validarEstadisticasH1(){
    if(this.estado1=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 1 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarH']);
    }
  }

  validarEstadisticasH2(){
    if(this.estado2=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 2 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarH']);
    }
  }

  validarEstadisticasH3(){
    if(this.estado3=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 3 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarH']);
    }
  }

  validarEstadisticasH4(){
    if(this.estado4=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 4 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarH']);
    }
  }

  /* Validar las estadisticas de temperatura */

  validarEstadisticasT1(){
    if(this.estado1=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 1 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarT']);
    }
  }

  validarEstadisticasT2(){
    if(this.estado2=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 2 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarT']);
    }
  }

  validarEstadisticasT3(){
    if(this.estado3=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 3 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarT']);
    }
  }

  validarEstadisticasT4(){
    if(this.estado4=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 4 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarT']);
    }
  }


}
