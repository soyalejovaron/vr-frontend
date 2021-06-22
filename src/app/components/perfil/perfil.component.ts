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

  editarPerfil: FormGroup;
  submitted = false;
  loading = false;
  uid: string | null;
  titulo:String;

  constructor(private fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.editarPerfil = this.fb.group({
      documento: ['', Validators.required],
      displayName: ['', Validators.required],
    })
    this.uid = this.aRoute.snapshot.paramMap.get('uid');
  }

  ngOnInit(): void {
    this.esEditar();
    this.toastr.info('Haz editado tu perfil con exito!', 'Usuario modificado', {
      positionClass: 'toast-bottom-right'
    })
  }

  editarUsuario() {

    const usuario: any = {
      documento: this.editarPerfil.value.documento,
      displayName: this.editarPerfil.value.displayName,
      nombreCompleto: this.editarPerfil.value.displayName,     
      fechaActualizacion: new Date()
    }


    this.loading = true;

    this._usuarioService.actualizarUsuario(this.uid, usuario).then(() => {
      this.loading = false;
      this.toastr.info('Haz editado tu perfil con exito!', 'Usuario modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/home']);
    })
    }


  esEditar() {
    this.titulo = 'Perfil de usuario'
    if (this.uid !== null) {
      this.loading = true;
      this._usuarioService.getUsuario(this.uid).subscribe(data => {
        this.loading = false;
        let documentoU = data.payload.data()['documento'];
        let displayNameU  = data.payload.data()['displayName'];
        let nombreCompletoU  = data.payload.data()['nombreCompleto'];

        if(displayNameU == null){
          displayNameU = nombreCompletoU;
        }
        this.editarPerfil.setValue({
          documento: documentoU,
          displayName: displayNameU,
        });
        
      })
    }
  }



}
