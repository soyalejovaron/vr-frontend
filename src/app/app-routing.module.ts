import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuariosComponent } from './components/crear-usuarios/crear-usuarios.component';
/* Rutas de los sensores de humedad */

/* Rutas de los sensores de temperatura */

import { SensorHumedadComponent } from './components/sensor-humedad/sensor-humedad.component';
import { SensorTemperaturaComponent } from './components/sensor-temperatura/sensor-temperatura.component'
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { PermisosJardineroAdmin } from './auth/guards/permisos-jardinero';
import { PermisosAdmin } from './auth/guards/permisos-admin';
import { PlantasComponent } from './components/plantas/plantas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DatosHumedadComponent } from './components/datos-humedad/datos-humedad.component';
import { DatosTemperaturaComponent } from './components/datos-temperatura/datos-temperatura.component';
import { CrudUsuarioComponent } from './components/crud-usuario/crud-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';
import { ValidacionInformacionComponent } from './components/validacion-informacion/validacion-informacion.component';
import { ManualUsuarioComponent } from './components/manual-usuario/manual-usuario.component';
import { RegistrarComponent } from './auth/registrar/registrar.component';
import { GraficasHumedadComponent } from './components/graficas-humedad/graficas-humedad.component';
import { GraficasTemperaturaComponent } from './components/graficas-temperatura/graficas-temperatura.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PermisosLogueado } from './auth/guards/permisos-noLoguedo';



const routes: Routes = [
  /* rutas de los sensores de humedad */
  {
    path: 'graficasHumedad/:tipo',
    component: GraficasHumedadComponent,
  },
  {
    path: 'graficasHumedad/:tipo/:idSensor',
    component: GraficasHumedadComponent,
  },
  {
    path: 'graficasTemperatura/:tipo',
    component: GraficasTemperaturaComponent,
  },
  {
    path: 'graficasTemperatura/:tipo/:idSensor',
    component: GraficasTemperaturaComponent,
  },
  {
    path: 'crear',
    component: CrearUsuariosComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'editar/:uid',
    component: CrearUsuariosComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'perfil/:uid',
    component: PerfilComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'temperatura',
    component: SensorTemperaturaComponent,
    canActivate: [PermisosAdmin],
  },
  {
    path: 'humedad',
    component: SensorHumedadComponent,
    canActivate: [PermisosAdmin],
  },
  {
    path: 'plantas',
    component: PlantasComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'humedad/:idSensor',
    component: SensorHumedadComponent,
    canActivate: [PermisosAdmin],
  },
  {
    path: 'temperatura/:idSensor',
    component: SensorTemperaturaComponent,
    canActivate: [PermisosAdmin],
  },
  {
    path: 'plantas/:id_planta',
    component: PlantasComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'register', 
    component: RegistrarComponent,
  },
  {
    path: 'verificar',
    component: SendEmailComponent
  },
  {
    path: 'datosHumedad',
    component: DatosHumedadComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'datosTemperatura',
    component: DatosTemperaturaComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'crud',
    component: CrudUsuarioComponent,
    canActivate: [PermisosAdmin],
  },
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'manual',
    component: ManualUsuarioComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'validarInformacion/:uid',
    component: ValidacionInformacionComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'contraseñaOlvidada', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**',   redirectTo: '/404', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }