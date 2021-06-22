import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadosDelSistemaService {

  baseUrl = environment.baseUrl;
  estadoSistema = 1;
 
  constructor(protected http: HttpClient) { }
  
  obtenerEstadosSistema() {
    return this.http.get(`${this.baseUrl}/estadosSistema`);
  }

  actualizarEstadosSistema(sistema: any){
    return this.http.put(`${this.baseUrl}/updateSistema`, sistema);
  } 


}
