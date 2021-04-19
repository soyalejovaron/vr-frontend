import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
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




const routes: Routes = [
  /* rutas de los sensores de humedad */
  {
    path: 'graficaPolarH',
    component: GraficaPolarareaHComponent
  },
  {
    path: 'graficaDoughnutH',
    component: GraficaDoughnutHComponent
  },
  {
    path: 'graficaHorizontalH',
    component: GraficaHorizontalbarHComponent
  },
  {
    path: 'graficaBarrasH',
    component: GraficaBarHComponent
  },
  {
    path: 'graficaLinealH',
    component: GraficaLineHComponent
  },
  {
    path: 'graficaRadarH',
    component: GraficaRadarHComponent
  },
  /* rutas de los sensores de temperatura */
  {
    path: 'graficaPolarT',
    component: GraficaPolarareaTComponent
  },
  {
    path: 'graficaDoughnutT',
    component: GraficaDoughnutTComponent
  },
  {
    path: 'graficaHorizontalT',
    component: GraficaHorizontalbarTComponent
  },
  {
    path: 'graficaBarrasT',
    component:  GraficaBarTComponent
  },
  {
    path: 'graficaLinealT',
    component: GraficaLineTComponent
  },
  {
    path: 'graficaRadarT',
    component: GraficaRadarTComponent
  },
  {
    path: 'crear',
    component: CrearUsuariosComponent
  },
  {
    path: 'editar/:uid',
    component: CrearUsuariosComponent
  },
  {
    path: 'crud',
    component: ListarUsuariosComponent,
    canActivate: [PermisosAdmin],
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
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'contraseñaOlvidada', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: '', pathMatch: 'full', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '**', pathMatch: 'full', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }