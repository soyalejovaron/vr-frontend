import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { User } from '../shared/models/user.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user$: Observable<User> = this.authSvc.afAuth.user;
  public secciones: Array<string> = ['primera'];
  constructor(public authSvc: AuthService, private router: Router, private toastr: ToastrService) { }

  valvula:string = "Apagado"
  bateria:string = "Apagado"
  panel:string = "Desconectado"

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


  ngOnInit(): void {
  }

  activarSistema(){
    this.valvula = "Activado";
    this.bateria = "Activado";
    this.panel = "Conectado";
    this.toastr.success('El sistema ha sido activado', 'Sistema del vivero encendido',{
      positionClass: 'toast-bottom-right'
    });
  }

  desactivarSistema(){
    this.valvula = "Apagado";
    this.bateria = "Apagado";
    this.panel = "Desconectado";
    this.toastr.error('El sistema ha sido desactivado', 'Sistema del vivero apagado',{
      positionClass: 'toast-bottom-right'
    });
  }

  activarLinea1(){
    this.estado1 = "Activado";
    this.temperatura1 = "20°c";
    this.humedad1 = "35%";
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
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarH']);
    }
  }

  validarEstadisticasH2(){
    if(this.estado2=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarH']);
    }
  }

  validarEstadisticasH3(){
    if(this.estado3=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarH']);
    }
  }

  validarEstadisticasH4(){
    if(this.estado4=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarH']);
    }
  }

  /* Validar las estadisticas de temperatura */

  validarEstadisticasT1(){
    if(this.estado1=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarT']);
    }
  }

  validarEstadisticasT2(){
    if(this.estado2=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarT']);
    }
  }

  validarEstadisticasT3(){
    if(this.estado3=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarT']);
    }
  }

  validarEstadisticasT4(){
    if(this.estado4=="Apagado"){
      this.toastr.error('Necesitas encenderla primero ', 'Linea de riego apagada',{
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.router.navigate(['/graficaRadarT']);
    }
  }

}
