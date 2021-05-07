import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorhumedadService {

  baseUrl = environment.baseUrl;
 
  constructor(protected http: HttpClient) { }

  getSensores() {
    return this.http.get(`${this.baseUrl}/sensores`);
  }

  getRegistros() {
    return this.http.get(`${this.baseUrl}/registrosHumedad`);
  } 

  getSensor(idSensor: string){
   return this.http.get(`${this.baseUrl}/sensores/${idSensor}`);
  }

  getRegistro() {
    return this.http.get(`${this.baseUrl}/registroHumedad`);
  } 

  guardarSensor(sensor: any) {
    return this.http.post(`${this.baseUrl}/addSensor`, sensor);
  }

  borrarSensor(idSensor: number){
      return this.http.delete(`${this.baseUrl}/deleteSensor/${idSensor}`);
  }
  
  actualizarSensor(sensor: any){
    return this.http.put(`${this.baseUrl}/updateSensor/${sensor['idSensor']}`, sensor);
  } 


}
