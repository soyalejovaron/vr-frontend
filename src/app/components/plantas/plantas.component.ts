import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PlantasService } from 'src/app/services/plantas.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.scss']
})
export class PlantasComponent implements OnInit, OnDestroy {

  plantas: any = [];
  plantaForm: FormGroup;
  planta: any;
  nombreP: string;
  descripcionP: string;
  id_planta: string;
  textButton: string;
  fileName= 'PlantasViveRegistro.xlsx';
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(protected _plantasService: PlantasService , public fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.textButton = "Agregar";
    this.obtenerParametroUrl();
    this.plantaForm = this.fb.group({
      id_planta: [''],
      nombre_planta: ['', Validators.required],
      descripcion_planta: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getPlantas();
    this.dtOptions = {
      pagingType: 'full_numbers',
      retrieve: true,
      pageLength: 4,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
      }
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  exportarExcel(): void
  {
    
    let element = document.getElementById('tablaPlantas');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    XLSX.writeFile(wb, this.fileName);
 
  }

  obtenerParametroUrl() {
    this.route.paramMap.subscribe(params => {
      this.id_planta = params.get('id_planta');
      if (this.id_planta) {
        this._plantasService.getPlanta(this.id_planta).subscribe(res => {
          this.nombreP = res[0].nombre_planta;
          this.descripcionP = res[0].descripcion_planta;
          this.plantaForm.patchValue({
            id_planta: [this.id_planta],
            nombre_planta: [this.nombreP],
            descripcion_planta: [this.descripcionP]
          });
          this.textButton = "Actualizar";
        });
      }
    });
  }

  getPlantas() {
    this._plantasService.getPlantas().subscribe(res => {
      this.plantas = res;
      this.dtTrigger.next();
    });
  }

  agregarPlanta() {
      if (!this.id_planta) {
      this._plantasService.guardarPlanta(this.plantaForm.value).subscribe(res => {
        this.getPlantas();
        window.location.reload();
      });
    }
    else {
      this._plantasService.actualizarPlanta(this.plantaForm.value).subscribe(res =>{
        this.getPlantas();
        this.router.navigate(['/plantas']);
      });
    }
  }

  borrarPlanta(id_planta) {
    this._plantasService.borrarPlanta(id_planta).subscribe(res => {
      this.getPlantas();
      window.location.reload();
    })
  }

}
