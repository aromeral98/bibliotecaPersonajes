import { Pipe, PipeTransform } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  
  transform(personaje:Personaje): string {

    console.log('pipe se procesó')
    if(!personaje.id && !personaje.alt_img){
      return `assets/no-image.png`
    }else if(personaje.alt_img){
      return personaje.alt_img
    }else{
    return `assets/personajes/${personaje.id}.jpg`}
  }

}