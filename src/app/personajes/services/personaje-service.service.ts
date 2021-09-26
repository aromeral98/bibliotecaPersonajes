import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeServiceService {

  constructor(private http:HttpClient) { }

  getPersonajes():Observable<Personaje[]>{
    return this.http.get<Personaje[]>(environment.baseUrl+'personajes')
  }

  getPersonajePorId(id:string):Observable<Personaje>{
    return this.http.get<Personaje>(environment.baseUrl+'personajes/'+id)
  }
  getSugerencias(termino:string):Observable<Personaje[]>{
    return this.http.get<Personaje[]>(environment.baseUrl+'personajes/'+`?q=${termino}&_limit=6`)
  }
  agregarPersonaje(personaje:Personaje):Observable<Personaje>{
    return this.http.post<Personaje>(environment.baseUrl+'personajes/',personaje)
  }
  editarPersonaje(personaje:Personaje):Observable<Personaje>{
    return this.http.put<Personaje>(environment.baseUrl+'personajes/'+personaje.id,personaje)
  }
  borrarPersonaje(id:string):Observable<any>{
    return this.http.delete<Personaje>(environment.baseUrl+'personajes/'+id)
  }
}
