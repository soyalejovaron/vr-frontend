import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SensorTemperaturaService } from 'src/app/services/sensor-temperatura.service';

@Component({
  selector: 'app-tipo-bar-temperatura',
  templateUrl: './tipo-bar-temperatura.component.html',
  styleUrls: ['./tipo-bar-temperatura.component.scss']
})
export class TipoBarTemperaturaComponent implements OnInit {
  sensores:any;

  sensorForm: FormGroup;

  constructor(public fb:FormBuilder ,private route: ActivatedRoute, private router: Router, private _sensorTemperaturaService: SensorTemperaturaService) {
   }

  ngOnInit(): void {
    this.desplegable();
    this._sensorTemperaturaService.getSensores().subscribe((data)=>{
      this.sensores=data;
    })
  }

  bar(){
    /* this.router.navigate(['/graficasHumedad', 'line']); */
    setTimeout(function(){
      window.location.reload();
  },100);
    
  }

  horizontal(){
    /* this.router.navigate(['/graficasHumedad', 'radar']); */
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
