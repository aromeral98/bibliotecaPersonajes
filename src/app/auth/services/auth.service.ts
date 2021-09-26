import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string =environment.baseUrl
  private _auth:Auth | undefined;


  get auth() :Auth{
    return {...this._auth!}
  }

  constructor(private http:HttpClient) { }

  verificaAutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of (false);
    }
    
    return this.http.get<Auth>(`${this.baseUrl}usuarios/2`)
      .pipe(
        map(auth=> {
          this._auth=auth;
        return true
      })
      )
    }
    
  
  login(email:string,password:any){
    
    return this.http.get<Auth>(`${this.baseUrl}usuarios/?email=${email}&password=${password}`)
    .pipe(
      tap(auth=>{
        this._auth=auth
      })
    )
  }
  logout(){
    this._auth=undefined;
  }

  registrar(formulario:Auth){
    return this.http.post<Auth>(this.baseUrl+'usuarios/',formulario)
  }
}
