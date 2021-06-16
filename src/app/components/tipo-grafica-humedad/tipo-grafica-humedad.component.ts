import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SensorhumedadService } from 'src/app/services/sensorhumedad.service';

@Component({
  selector: 'app-tipo-grafica-humedad',
  templateUrl: './tipo-grafica-humedad.component.html',
  styleUrls: ['./tipo-grafica-humedad.component.scss']
})
export class TipoGraficaHumedadComponent implements OnInit {

  sensores:any;

  sensorForm: FormGroup;

  constructor(public fb:FormBuilder ,private route: ActivatedRoute, private router: Router, private _sensorHumedadService: SensorhumedadService) {
   }

  ngOnInit(): void {
    this.desplegable();
    this._sensorHumedadService.getSensores().subscribe((data)=>{
      this.sensores=data;
    })
  }

  line(){
    /* this.router.navigate(['/graficasHumedad', 'line']); */
    setTimeout(function(){
      window.location.reload();
  },100);
    
  }

  radar(){
    /* this.router.navigate(['/graficasHumedad', 'radar']); */
    setTimeout(function(){
      window.location.reload();
  },100);
  }

  bar(){
    /* this.router.navigate(['/graficasHumedad', 'bar']); */
    setTimeout(function(){
      window.location.reload();
  },100);
  }


  desplegable(){
    $('.dropdown-submenu > a').on("click", function(e) {
      var submenu = $(this);
      $('.dropdown-submenu .dropdown-menu').removeClass('show');
      submenu.next('.dropdown-menu').addClass('show');
      e.stopPropagation();
  });
  
  $('.dropdown').on("hidden.bs.dropdown", function() {
      // hide any open menus when parent closes
      $('.dropdown-menu.show').removeClass('show');
  });
  }

}
