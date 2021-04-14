import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {
  baseUrl = environment.baseUrl;
 
  constructor(protected http: HttpClient) { }

  getPlantas() {
    return this.http.get(`${this.baseUrl}/plantas`);
  }

  getPlanta(id_planta: string){
   return this.http.get(`${this.baseUrl}/plantas/${id_planta}`);
  }

  guardarPlanta(planta: any) {
    return this.http.post(`${this.baseUrl}/addPlanta`, planta);
  }

  borrarPlanta(id_planta: number){
      return this.http.delete(`${this.baseUrl}/deletePlanta/${id_planta}`);
  }
  
  actualizarPlanta(planta: any){
    return this.http.put(`${this.baseUrl}/updatePlanta/${planta['id_planta']}`, planta);
  } 

}
