import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.scss']
})
export class CrearUsuariosComponent implements OnInit {

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
      role: ['', Validators.required],
      estado: ['', Validators.required]
    })
    this.uid = this.aRoute.snapshot.paramMap.get('uid');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  validarUid() {
    this.submitted = true;

    if (this.createUsuario.invalid) {
      return;
    }

    if (this.uid !== null) {
      this.editarUsuario(this.uid);
    }

  }

  editarUsuario(uid: string) {

    const usuario: any = {
      documento: this.createUsuario.value.documento,
      displayName: this.createUsuario.value.displayName,
      role: this.createUsuario.value.role,
      estado: this.createUsuario.value.estado,      
      fechaActualizacion: new Date()
    }

    this.loading = true;

    this._usuarioService.actualizarUsuario(uid, usuario).then(() => {
      this.loading = false;
      this.toastr.info('El usuario fue modificado con exito', 'Usuario modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/crud']); 
    })
  }


  esEditar() {
    this.titulo = 'Editar Usuario'
    if (this.uid !== null) {
      this.loading = true;
      this._usuarioService.getUsuario(this.uid).subscribe(data => {
        this.loading = false;
        this.createUsuario.setValue({
          documento: data.payload.data()['documento'],
          displayName: data.payload.data()['displayName'],
          role: data.payload.data()['role'],
          estado: data.payload.data()['estado'],
        })
      })
    }
  }


}
