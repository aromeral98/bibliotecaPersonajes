import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import {map ,delay} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  public usuarioPattern:string='([a-zA-z]+)'
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(private http:HttpClient) { }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email=control.value
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
    .pipe(
    map(resp=>{
      
      return (resp.length === 0) 
      ? null
      : {emailEscogido:true}
    })
    )
  }



}
