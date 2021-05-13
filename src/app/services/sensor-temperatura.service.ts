import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorTemperaturaService {
  baseUrl = environment.baseUrl;
 
  constructor(protected http: HttpClient) { }

  getSensores() {
    return this.http.get(`${this.baseUrl}/sensoresT`);
  }

  getRegistros() {
    return this.http.get(`${this.baseUrl}/registrosTemperatura`);
  } 

  getSensor(idSensor: string){
   return this.http.get(`${this.baseUrl}/sensoresT/${idSensor}`);
  }

  getRegistro() {
    return this.http.get(`${this.baseUrl}/registroTemperatura`);
  } 

  guardarSensor(sensor: any) {
    return this.http.post(`${this.baseUrl}/addSensorT`, sensor);
  }

  borrarSensor(idSensor: number){
      return this.http.delete(`${this.baseUrl}/deleteSensorT/${idSensor}`);
  }
  
  actualizarSensor(sensor: any){
    return this.http.put(`${this.baseUrl}/updateSensorT/${sensor['idSensor']}`, sensor);
  } 
}
