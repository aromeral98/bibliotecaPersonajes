import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-personaje-tarjeta',
  templateUrl: './personaje-tarjeta.component.html',
  styles: [`
 `
  ]
})
export class PersonajeTarjetaComponent {
  @Input() personaje:Personaje={
      "id": "",
      "especie": "",
      "genero":"",
      "frases":""
  };


}



