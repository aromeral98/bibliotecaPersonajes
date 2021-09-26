import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Personaje } from '../../interfaces/personaje.interface'; 
import { PersonajeServiceService } from '../../services/personaje-service.service'; 

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino:any="";
  personajes:Personaje[]=[];
  personajeSeleccionado!:Personaje |undefined;

  constructor(
    private personajesService:PersonajeServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }
  buscando(){
    this.personajesService.getSugerencias(this.termino.trim())
    .subscribe(personajes=>this.personajes=personajes)
    
  }

  opcionSeleccionada(event:MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.personajeSeleccionado=undefined;
      return 
    }

    const personaje:Personaje= event.option.value;


    this.termino=personaje.uid;
    this.personajesService.getPersonajePorId(personaje.id)
    .subscribe(personaje=>
      
      this.personajeSeleccionado=personaje
      
      )
      this.router.navigate(['/personajes/',personaje.id])
  }
}
