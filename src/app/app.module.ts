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
import { NavbarPrincipalComponent } from './components/navbar-principal/navbar-principal.component';
import { RegistrarComponent } from './auth/registrar/registrar.component';
import { GraficasHumedadComponent } from './components/graficas-humedad/graficas-humedad.component';
import { GraficasTemperaturaComponent } from './components/graficas-temperatura/graficas-temperatura.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SensorHumedadComponent,
    SensorTemperaturaComponent,
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
    NavbarPrincipalComponent,
    RegistrarComponent,
    GraficasHumedadComponent,
    GraficasTemperaturaComponent,
    NotFoundComponent,
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
