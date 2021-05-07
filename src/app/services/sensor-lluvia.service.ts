import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorLluviaService {

  baseUrl = environment.baseUrl;
 
  constructor(protected http: HttpClient) { }

  getRegistrosLluvia() {
    return this.http.get(`${this.baseUrl}/registroLluvia`);
  } 
  

}
