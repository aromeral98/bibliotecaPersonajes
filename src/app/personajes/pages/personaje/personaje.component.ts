import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Personaje } from '../../interfaces/personaje.interface';
import { PersonajeServiceService } from '../../services/personaje-service.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styles: [`

  img{

  
    border-radius:5px;
  }`
  ]
})
export class PersonajeComponent implements OnInit {

  personaje!:Personaje;
    
  constructor(private activatedRoute:ActivatedRoute,
              private personajesService:PersonajeServiceService,
              private router :Router) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>
      this.personajesService.getPersonajePorId(id)
      )
      
    )
    .subscribe(personaje=>this.personaje = personaje)
    
  }
  regresar(){
    this.router.navigate(['personajes/listado'])
  }

}
