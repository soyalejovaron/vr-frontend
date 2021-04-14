import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  baseUrl = environment.baseUrl;
 
  constructor(protected http: HttpClient) { }
  
  getEstados() {
    return this.http.get(`${this.baseUrl}/estados`);
  }
}
