import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  createUsuario: FormGroup;
  submitted = false;
  loading = false;
  uid: string | null;
  titulo = 'Agregar Usuario';

  constructor(private fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.createUsuario = this.fb.group({
      documento: ['', Validators.required],
      displayName: ['', Validators.required],

    })
    this.uid = this.aRoute.snapshot.paramMap.get('uid');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  editarEmpleado() {

    const empleado: any = {
      documento: this.createUsuario.value.documento,
      displayName: this.createUsuario.value.displayName,     
      fechaActualizacion: new Date()
    }

    this.loading = true;

    this._usuarioService.actualizarUsuario(this.uid, empleado).then(() => {
      this.loading = false;
      this.toastr.info('Haz editado tu perfil con exito!', 'Usuario modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/inicio']);
    })
  }


  esEditar() {
    this.titulo = 'Perfil de usuario'
    if (this.uid !== null) {
      this.loading = true;
      this._usuarioService.getUsuario(this.uid).subscribe(data => {
        this.loading = false;
        this.createUsuario.setValue({
          documento: data.payload.data()['documento'],
          displayName: data.payload.data()['displayName'],
        })
      })
    }
  }



}
