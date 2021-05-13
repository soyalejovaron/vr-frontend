import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuariosComponent } from './components/crear-usuarios/crear-usuarios.component';
/* Rutas de los sensores de humedad */

import { GraficaLineHComponent } from './components/graficasHumedad/grafica-line-h/grafica-line-h.component';
import { GraficaBarHComponent } from './components/graficasHumedad/grafica-bar-h/grafica-bar-h.component';
import { GraficaHorizontalbarHComponent } from './components/graficasHumedad/grafica-horizontalbar-h/grafica-horizontalbar-h.component';
import { GraficaDoughnutHComponent } from './components/graficasHumedad/grafica-doughnut-h/grafica-doughnut-h.component';
import { GraficaPolarareaHComponent } from './components/graficasHumedad/grafica-polararea-h/grafica-polararea-h.component';
import { GraficaRadarHComponent } from './components/graficasHumedad/grafica-radar-h/grafica-radar-h.component';

/* Rutas de los sensores de temperatura */

import { GraficaLineTComponent } from './components/graficasTemperatura/grafica-line-t/grafica-line-t.component';
import { GraficaBarTComponent } from './components/graficasTemperatura/grafica-bar-t/grafica-bar-t.component';
import { GraficaHorizontalbarTComponent } from './components/graficasTemperatura/grafica-horizontalbar-t/grafica-horizontalbar-t.component';
import { GraficaDoughnutTComponent } from './components/graficasTemperatura/grafica-doughnut-t/grafica-doughnut-t.component';
import { GraficaPolarareaTComponent } from './components/graficasTemperatura/grafica-polararea-t/grafica-polararea-t.component';
import { GraficaRadarTComponent } from './components/graficasTemperatura/grafica-radar-t/grafica-radar-t.component';

import { SensorHumedadComponent } from './components/sensor-humedad/sensor-humedad.component';
import { SensorTemperaturaComponent } from './components/sensor-temperatura/sensor-temperatura.component'
import { RegisterComponent } from './auth/register/register.component';
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



const routes: Routes = [
  /* rutas de los sensores de humedad */
  {
    path: 'graficaPolarH',
    component: GraficaPolarareaHComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'graficaDoughnutH',
    component: GraficaDoughnutHComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'graficaHorizontalH',
    component: GraficaHorizontalbarHComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'graficaBarrasH',
    component: GraficaBarHComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'graficaLinealH',
    component: GraficaLineHComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'graficaRadarH',
    component: GraficaRadarHComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  /* rutas de los sensores de temperatura */
  {
    path: 'graficaPolarT',
    component: GraficaPolarareaTComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'graficaDoughnutT',
    component: GraficaDoughnutTComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'graficaHorizontalT',
    component: GraficaHorizontalbarTComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'graficaBarrasT',
    component:  GraficaBarTComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'graficaLinealT',
    component: GraficaLineTComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'graficaRadarT',
    component: GraficaRadarTComponent,
    canActivate: [PermisosJardineroAdmin],
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
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'humedad',
    component: SensorHumedadComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'plantas',
    component: PlantasComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'humedad/:idSensor',
    component: SensorHumedadComponent,
  },
  {
    path: 'temperatura/:idSensor',
    component: SensorTemperaturaComponent
  },
  {
    path: 'plantas/:id_planta',
    component: PlantasComponent,
    canActivate: [PermisosJardineroAdmin],
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'verificar',
    component: SendEmailComponent
  },
  {
    path: 'datosHumedad',
    component: DatosHumedadComponent
  },
  {
    path: 'datosTemperatura',
    component: DatosTemperaturaComponent
  },
  {
    path: 'crud',
    component: CrudUsuarioComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'manual',
    component: ManualUsuarioComponent
  },
  {
    path: 'validarInformacion/:uid',
    component: ValidacionInformacionComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'contraseñaOlvidada', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**',   redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }