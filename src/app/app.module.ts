import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { environment } from 'src/environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import { SensorHumedadComponent } from './components/sensor-humedad/sensor-humedad.component';
import { SensorTemperaturaComponent } from './components/sensor-temperatura/sensor-temperatura.component';
import { GraficaBarTComponent } from './components/graficasTemperatura/grafica-bar-t/grafica-bar-t.component';
import { GraficaLineTComponent } from './components/graficasTemperatura/grafica-line-t/grafica-line-t.component';
import { GraficaHorizontalbarTComponent } from './components/graficasTemperatura/grafica-horizontalbar-t/grafica-horizontalbar-t.component';
import { GraficaHorizontalbarHComponent } from './components/graficasHumedad/grafica-horizontalbar-h/grafica-horizontalbar-h.component';
import { GraficaRadarHComponent } from './components/graficasHumedad/grafica-radar-h/grafica-radar-h.component';
import { GraficaLineHComponent } from './components/graficasHumedad/grafica-line-h/grafica-line-h.component';
import { GraficaBarHComponent } from './components/graficasHumedad/grafica-bar-h/grafica-bar-h.component';
import { TipoGraficaHumedadComponent } from './components/tipo-grafica-humedad/tipo-grafica-humedad.component';
import { TipoGraficaTemperaturaComponent } from './components/tipo-grafica-temperatura/tipo-grafica-temperatura.component';
import { TipoBarHumedadComponent } from './components/tipo-bar-humedad/tipo-bar-humedad.component';
import { TipoBarTemperaturaComponent } from './components/tipo-bar-temperatura/tipo-bar-temperatura.component';
import { DataTablesModule } from "angular-datatables";

/* Firebase modulos */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthGuardModule  } from '@angular/fire/auth-guard';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { CrearUsuariosComponent } from './components/crear-usuarios/crear-usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlantasComponent } from './components/plantas/plantas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RealTimeComponent } from './components/real-time/real-time.component';
import { DatosHumedadComponent } from './components/datos-humedad/datos-humedad.component';
import { DatosTemperaturaComponent } from './components/datos-temperatura/datos-temperatura.component';
import { CrudUsuarioComponent } from './components/crud-usuario/crud-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';
import { ValidacionInformacionComponent } from './components/validacion-informacion/validacion-informacion.component';
import { ManualUsuarioComponent } from './components/manual-usuario/manual-usuario.component';
import { RealTimeTemperaturaComponent } from './components/real-time-temperatura/real-time-temperatura.component';
import { GraficaRadarTComponent } from './components/graficasTemperatura/grafica-radar-t/grafica-radar-t.component';
import { NavbarPrincipalComponent } from './components/navbar-principal/navbar-principal.component';
import { RegistrarComponent } from './auth/registrar/registrar.component';


@NgModule({
  declarations: [
    AppComponent,
    SensorHumedadComponent,
    SensorTemperaturaComponent,
    GraficaBarTComponent,
    GraficaLineTComponent,
    GraficaHorizontalbarTComponent,
    GraficaHorizontalbarHComponent,
    GraficaRadarHComponent,
    GraficaLineHComponent,
    GraficaBarHComponent,
    TipoGraficaHumedadComponent,
    TipoGraficaTemperaturaComponent,
    TipoBarHumedadComponent,
    TipoBarTemperaturaComponent,
    SendEmailComponent,
    CrearUsuariosComponent,
    PlantasComponent,
    PerfilComponent,
    RealTimeComponent,
    DatosHumedadComponent,
    DatosTemperaturaComponent,
    CrudUsuarioComponent,
    InicioComponent,
    HomeComponent,
    ValidacionInformacionComponent,
    ManualUsuarioComponent,
    RealTimeTemperaturaComponent,
    GraficaRadarTComponent,
    NavbarPrincipalComponent,
    RegistrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorPickerModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireAuthGuardModule,
    DataTablesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
