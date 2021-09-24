import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { PersonajeTarjetaComponent } from './components/personaje-tarjeta/personaje-tarjeta.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';


@NgModule({
  declarations: [
    ConfirmarComponent,
    PersonajeTarjetaComponent,
    AgregarComponent,
    BuscarComponent,
    PersonajeComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    
  ]
})
export class PersonajesModule { }
