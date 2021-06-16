import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SensorhumedadService } from 'src/app/services/sensorhumedad.service';

@Component({
  selector: 'app-tipo-bar-humedad',
  templateUrl: './tipo-bar-humedad.component.html',
  styleUrls: ['./tipo-bar-humedad.component.scss']
})
export class TipoBarHumedadComponent implements OnInit {

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
