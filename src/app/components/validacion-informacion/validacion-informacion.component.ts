import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-validacion-informacion',
  templateUrl: './validacion-informacion.component.html',
  styleUrls: ['./validacion-informacion.component.scss']
})
export class ValidacionInformacionComponent implements OnInit {
  public user$: Observable<User> = this.authSvc.user$;
  editarPerfil: FormGroup;
  submitted = false;
  loading = false;
  uid: string | null;
  titulo:String;
  nombre:boolean;
  verificacion = "verificado";

  constructor(private fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private router: Router,
    private toastr: ToastrService,
    public authSvc: AuthService,
    private aRoute: ActivatedRoute) {
    this.editarPerfil = this.fb.group({
      documento: ['', Validators.required],
      displayName: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.verificarUsuario();
  }

  editarUsuario() {

    const usuario: any = {
      documento: this.editarPerfil.value.documento,
      displayName: this.editarPerfil.value.displayName,
      nombreCompleto: this.editarPerfil.value.displayName,
      verificacion: this.verificacion,     
      fechaActualizacion: new Date()
    }


    this.loading = true;

    this._usuarioService.actualizarUsuario(this.uid, usuario).then(() => {
      this.loading = false;
      this.toastr.info('Todo ha ido con exito!', 'Bienvenido a ViveRegistro', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/home']);
    })
  }


  verificarUsuario() {
      this.aRoute.paramMap.subscribe(params => {
        this.uid = params.get('uid');
        this.titulo = 'Perfil de usuario'
        if (this.uid) {
          this.loading = true;
          this._usuarioService.getUsuario(this.uid).subscribe(data => {
            this.loading = false;
            let documentoU = data.payload.data()['documento'];
            let displayNameU  = data.payload.data()['displayName'];

            if(documentoU==null && displayNameU==null){
              this.nombre=true;
            }else if(documentoU=="" || documentoU==null){
              this.nombre=false;
            }
          })
        }
      });
  }



}
