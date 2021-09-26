import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { PersonajeServiceService } from '../../services/personaje-service.service';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  personajes:Personaje[]=[];

  constructor(private personajeService:PersonajeServiceService) { }

  ngOnInit(): void {

    this.personajeService.getPersonajes()
      .subscribe(resp=>{this.personajes=resp;})
  }

}
