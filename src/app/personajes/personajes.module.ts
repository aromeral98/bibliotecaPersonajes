import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PersonajesRoutingModule } from './personajes-routing.module';

import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { PersonajeTarjetaComponent } from './components/personaje-tarjeta/personaje-tarjeta.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AngularMaterialModule } from '../angularMaterial/angular-material/angular-material.module';
import { ImagePipe } from './pipes/image.pipe';


@NgModule({
  declarations: [
    ImagePipe,
    ConfirmarComponent,
    PersonajeTarjetaComponent,
    AgregarComponent,
    BuscarComponent,
    PersonajeComponent,
    HomeComponent,
    ListadoComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    PersonajesRoutingModule,
    AngularMaterialModule
  ]
})
export class PersonajesModule { }
