import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnviarDatosApiService {

  URL= "https://api-correo.herokuapp.com/guardardatos";

  constructor(private http: HttpClient) { }

  enviarDatos(cuenta: any): Observable<any>{
    return this.http.post<any>(this.URL, cuenta)
  }
}
