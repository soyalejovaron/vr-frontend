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

  // Creamos una variable de tipo formulario para guardar la información que llegue de los campos llenados en el formulario HTML
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
    // Creamos un grupo de formulario, donde podremos requerir a través de validators los campos de n formulario, y así obtener el valor que lleguen de estos mismos
    this.createUsuario = this.fb.group({
      documento: ['', Validators.required],
      displayName: ['', Validators.required],
      role: ['', Validators.required],
      estado: ['', Validators.required]
    })
    // Le asignaremos un valor a la variable "uid", haciendo uso de metodos los cuales capturaran el uid que llegue a través de la URL
    this.uid = this.aRoute.snapshot.paramMap.get('uid');
  }

  // Inicializaremos el metodo "esEditar", para poder ejecutarlo al momento de que se entre al componente de crearUsuarios
  ngOnInit(): void {
    this.esEditar();
  }

  // Validaremos con este metodo dos cosas, primero, si el formulario es valido, o sea, si los campos requeridos fueron llenaods, en caso de no ser así, no se enviará la información
  validarUid() {
    this.submitted = true;

    if (this.createUsuario.invalid) {
      return;
    }
    // Validamos si el id que llegó por medio de la URL es diferente a vacio o nulo, en caso de contener algo, o sea un id, se accionará el metodo siguiente
    if (this.uid !== null) {
      this.editarUsuario(this.uid);
    }

  }

  // Metodo el cual en una constante, guardará cada uno de los campos que lleguen a através del formulario
  editarUsuario(uid: string) {

    const usuario: any = {
      documento: this.createUsuario.value.documento,
      displayName: this.createUsuario.value.displayName,
      role: this.createUsuario.value.role,
      estado: this.createUsuario.value.estado,      
      fechaActualizacion: new Date()
    }

    this.loading = true;

    // Por medio de un servicio creado anteriormente, se actualizará el usuario, enviandole un "id" y un "usuario",
    // Y como respuesta, se le enviará un mensaje de exito, en caso de que el usuario haya sido actualizado
    this._usuarioService.actualizarUsuario(uid, usuario).then(() => {
      this.loading = false;
      this.toastr.info('El usuario fue modificado con exito', 'Usuario modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/crud']); 
    })
  }

  // Accederemos a la información de x usuario, haciendo uso de un servicio que al pasarle n id, nos traerá todos sus registros
  // una vez traido los registros, se hará un set value, cuyo proposito es insertar los datos traidos en cada uno de los campos correspondientes del formulario
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
