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
import { EstadosDelSistemaService } from 'src/app/services/estados-del-sistema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user$: Observable<User> = this.authSvc.afAuth.user;
  valvula:string = "Apagado";
  bateria:string = "Apagado";
  panel:string = "Apagado";
  idSensor:string = "1";
  estadoLluvia:string = "Apagado";
  lluvia:string = "No";
  tanqueAgua:string = "50%"; 

  temperatura1:string = "0°c";
  temperatura2:string = "0°c";
  temperatura3:string = "0°c";
  temperatura4:string = "0°c";

  humedad1:string = "0%";
  humedad2:string = "0%";
  humedad3:string = "0%";
  humedad4:string = "0%";

  sistema:boolean= false;
  estado1:boolean = false;
  estado2:boolean = false;
  estado3:boolean = false;
  estado4:boolean = false;

  
  constructor(private _estadosDelSistemaService: EstadosDelSistemaService,private _usuarioService: UsuarioService, private fb: FormBuilder, private aRoute: ActivatedRoute, private route: ActivatedRoute, private router: Router, public authSvc: AuthService, private toastr: ToastrService, protected _sensorHumedadService: SensorhumedadService,
     protected _sensorTemperaturaService: SensorTemperaturaService, protected _sensorLluviaService: SensorLluviaService) {
  
      }


  ngOnInit(): void {
    this.verificarSistema();
  }

  verificarSistema(){
    this._estadosDelSistemaService.obtenerEstadosSistema().subscribe((res)=>{
      this.sistema = res[0].estadoSistema;
      this.estado1 = res[0].estadoLinea1;
      this.estado2 = res[0].estadoLinea2;
      this.estado3 = res[0].estadoLinea3;
      this.estado4 = res[0].estadoLinea4;
      if(res[0].estadoSistema == true){
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
      }
      if(res[0].estadoLinea1 == true){
        this._sensorHumedadService.getRegistro().subscribe(res => {
          this.humedad1 = res[0].porcentajeH + "%";
        });
        this._sensorTemperaturaService.getRegistro().subscribe(res => {
          this.temperatura1 = res[0].porcentajeT + "°c";
        });
      }
      if(res[0].estadoLinea2 == true){
        this.temperatura2 = "10°c";
        this.humedad2 = "15%";
      }
      if(res[0].estadoLinea3 == true){
        this.temperatura3 = "30°c";
        this.humedad3 = "52%";
      }
      if(res[0].estadoLinea4 == true){
        this.temperatura4 = "38°c";
        this.humedad4 = "85%";
      }
    })
  }

  activarSistema(){  
    this.sistema = true;
    const sistemaStatus: any = {
      estadoSistema: 1,
      estadoLinea1: this.estado1,
      estadoLinea2: this.estado2,
      estadoLinea3: this.estado3,
      estadoLinea4: this.estado4
    }

    this._estadosDelSistemaService.actualizarEstadosSistema(sistemaStatus).subscribe((res)=>{
      this.toastr.success('El sistema ha sido activado', 'Sistema del vivero encendido',{
        positionClass: 'toast-bottom-right'
      });
    });

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
    window.location.reload();
  }

  desactivarSistema(){
    this.estado1 = false;
    this.estado2 = false;
    this.estado3 = false;
    this.estado4 = false;
    this.sistema = false;
    const sistemaStatus: any = {
      estadoSistema: 0,
      estadoLinea1: 0,
      estadoLinea2: 0,
      estadoLinea3: 0,
      estadoLinea4:0
    }
    this._estadosDelSistemaService.actualizarEstadosSistema(sistemaStatus).subscribe((res)=>{
      this.toastr.error('El sistema ha sido desactivado', 'Sistema del vivero apagado',{
        positionClass: 'toast-bottom-right'
      });
    });

    this.tanqueAgua="50%";
    this.estadoLluvia="Apagado";
    this.lluvia="No";
    this.valvula = "Apagado";
    this.bateria = "Apagado";
    this.panel = "Apagado";
    this.temperatura1 = "0°c";
    this.humedad1 = "0%";
    this.temperatura2 = "0°c";
    this.humedad2 = "0%";
    this.temperatura3 = "0°c";
    this.humedad3 = "0%";
    this.temperatura4 = "0°c";
    this.humedad4 = "0%";
  }

  activarLinea1(){
    
    if(this.sistema==false){
      this.toastr.error('No puedes activar la linea de riego sin antes encender el sistema', 'Sistema apagado',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.estado1 = true;
      const sistemaStatus: any = {
        estadoSistema: this.sistema,
        estadoLinea1: 1,
        estadoLinea2: this.estado2,
        estadoLinea3: this.estado3,
        estadoLinea4: this.estado4
      }
  
      this._estadosDelSistemaService.actualizarEstadosSistema(sistemaStatus).subscribe((res)=>{
        this.toastr.success('', 'Linea de riego 1 encendida',{
          positionClass: 'toast-bottom-right'
        });
        this._sensorHumedadService.getRegistro().subscribe(res => {
          this.humedad1 = res[0].porcentajeH + "%";
        });
        this._sensorTemperaturaService.getRegistro().subscribe(res => {
          this.temperatura1 = res[0].porcentajeT + "°c";
        });
      });

      window.location.reload();
    }
  }

  activarLinea2(){
    if(this.sistema==false){
      this.toastr.error('No puedes activar la linea de riego sin antes encender el sistema', 'Sistema apagado',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.estado2 = true;
      const sistemaStatus: any = {
        estadoSistema: this.sistema,
        estadoLinea1: this.estado1,
        estadoLinea2: 1,
        estadoLinea3: this.estado3,
        estadoLinea4: this.estado4
      }
  
      this._estadosDelSistemaService.actualizarEstadosSistema(sistemaStatus).subscribe((res)=>{
        this.toastr.success('', 'Linea de riego 2 encendida',{
          positionClass: 'toast-bottom-right'
        });
        this.temperatura2 = "10°c";
        this.humedad2 = "15%";
      });
    window.location.reload();
      
    }
  }

  activarLinea3(){
    if(this.sistema==false){
      this.toastr.error('No puedes activar la linea de riego sin antes encender el sistema', 'Sistema apagado',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.estado3 = true;
      const sistemaStatus: any = {
        estadoSistema: this.sistema,
        estadoLinea1: this.estado1,
        estadoLinea2: this.estado2,
        estadoLinea3: 1,
        estadoLinea4: this.estado4
      }
  
      this._estadosDelSistemaService.actualizarEstadosSistema(sistemaStatus).subscribe((res)=>{
        this.toastr.success('', 'Linea de riego 3 encendida',{
          positionClass: 'toast-bottom-right'
        });
        this.temperatura3 = "30°c";
        this.humedad3 = "52%";
      });
      window.location.reload();

    }
  }

  activarLinea4(){
    if(this.sistema==false){
      this.toastr.error('No puedes activar la linea de riego sin antes encender el sistema', 'Sistema apagado',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.estado4 = true;
      const sistemaStatus: any = {
        estadoSistema: this.sistema,
        estadoLinea1: this.estado1,
        estadoLinea2: this.estado2,
        estadoLinea3: this.estado3,
        estadoLinea4: 1
      }
  
      this._estadosDelSistemaService.actualizarEstadosSistema(sistemaStatus).subscribe((res)=>{
        this.toastr.success('', 'Linea de riego 4 encendida',{
          positionClass: 'toast-bottom-right'
        });
        this.temperatura3 = "30°c";
        this.humedad3 = "52%";
      });
      window.location.reload();

    }
  }

  desactivarLinea1(){
    this.estado1 = false;
    const sistemaStatus: any = {
      estadoSistema: this.sistema,
      estadoLinea1: 0,
      estadoLinea2: this.estado2,
      estadoLinea3: this.estado3,
      estadoLinea4: this.estado4
    }

    this._estadosDelSistemaService.actualizarEstadosSistema(sistemaStatus).subscribe((res)=>{
      this.toastr.error('', 'Linea de riego 1 apagada',{
        positionClass: 'toast-bottom-right'
      });
    });
    this.temperatura1 = "0°c";
    this.humedad1 = "0%";
  }

  desactivarLinea2(){
    this.estado2 = false;
    const sistemaStatus: any = {
      estadoSistema: this.sistema,
      estadoLinea1: this.estado1,
      estadoLinea2: 0,
      estadoLinea3: this.estado3,
      estadoLinea4: this.estado4
    }

    this._estadosDelSistemaService.actualizarEstadosSistema(sistemaStatus).subscribe((res)=>{
      this.toastr.error('', 'Linea de riego 2 apagada',{
        positionClass: 'toast-bottom-right'
      });
    });
    this.temperatura2 = "0°c";
    this.humedad2 = "0%";
  }

  desactivarLinea3(){
    this.estado3 = false;
    const sistemaStatus: any = {
      estadoSistema: this.sistema,
      estadoLinea1: this.estado1,
      estadoLinea2: this.estado2,
      estadoLinea3: 0,
      estadoLinea4: this.estado4
    }

    this._estadosDelSistemaService.actualizarEstadosSistema(sistemaStatus).subscribe((res)=>{
      this.toastr.error('', 'Linea de riego 3 apagada',{
        positionClass: 'toast-bottom-right'
      });
    });
    this.temperatura3 = "0°c";
    this.humedad3 = "0%";
  }

  desactivarLinea4(){
    this.estado4 = false;
    const sistemaStatus: any = {
      estadoSistema: this.sistema,
      estadoLinea1: this.estado1,
      estadoLinea2: this.estado2,
      estadoLinea3: this.estado3,
      estadoLinea4: 0
    }

    this._estadosDelSistemaService.actualizarEstadosSistema(sistemaStatus).subscribe((res)=>{
      this.toastr.error('', 'Linea de riego 4 apagada',{
        positionClass: 'toast-bottom-right'
      });
    });
    this.temperatura4 = "0°c";
    this.humedad4  = "0%";
  }

  validarEstadisticasH1(){
    if(this.estado1==false){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 1 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficasHumedad', 'radar', 1]);
    }
  }

  validarEstadisticasH2(){
    if(this.estado2==false){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 2 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficasHumedad', 'radar',1]);
    }
  }

  validarEstadisticasH3(){
    if(this.estado3==false){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 3 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficasHumedad', 'radar', 1]);
    }
  }

  validarEstadisticasH4(){
    if(this.estado4==false){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 4 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficasHumedad', 'radar', 1]);
    }
  }

  /* Validar las estadisticas de temperatura */

  validarEstadisticasT1(){
    if(this.estado1==false){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 1 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficasTemperatura', 'radar', 1]);
    }
  }

  validarEstadisticasT2(){
    if(this.estado2==false){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 2 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficasTemperatura', 'radar', 1]);
    }
  }

  validarEstadisticasT3(){
    if(this.estado3==false){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 3 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficasTemperatura', 'radar', 1]);
    }
  }

  validarEstadisticasT4(){
    if(this.estado4==false){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego 4 apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficasTemperatura', 'radar', 1]);
    }
  }


}
