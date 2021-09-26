import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from '../../interfaces/personaje.interface';
import { PersonajeServiceService } from '../../services/personaje-service.service';
import {switchMap} from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img{
    width:100%;
    height:1000px;
    border-radius:5px;
  }
  mat-form-field{
    margin:10px;
  }`
  ]
})
export class AgregarComponent implements OnInit {



  personaje:Personaje ={
    uid:'',
    id:'',
    especie:'',
    genero:'',
    frases:'',
    
  }
  
  constructor(private personajeService:PersonajeServiceService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.router.url !='/personajes/agregar'){
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.personajeService.getPersonajePorId(id))
    )
    .subscribe(personaje=>this.personaje=personaje);
  }
}
  guardar(){
    
      if(this.personaje.uid.trim().length===0){
        console.log(this.personaje.uid)
        return
      }
      if(this.personaje.id){
        console.log(this.personaje.id)
        this.personajeService.editarPersonaje(this.personaje)
        .subscribe(personaje=>{
          this.mostrarSnackBar('Registro actualizado')
      })
      
    }else{ 
      this.personaje.id=this.personaje.uid.trim();
      this.personajeService.agregarPersonaje(this.personaje)
        .subscribe(personaje=>{
          this.router.navigate(['/personajes/editar',personaje.id])
          this.mostrarSnackBar('Registro Creado')
        })}
  }
  borrarPersonaje(){
    const dialog=this.dialog.open(ConfirmarComponent,{
      width:'250px',
      data:this.personaje
    })
    dialog.afterClosed()
    .subscribe(resp=>{
      if(resp){
        this.personajeService.borrarPersonaje(this.personaje.id!)
        .subscribe(resp=>{
          this.router.navigate(['/personajes/listado'])
        })
      }
    })
    
  }
  mostrarSnackBar(mensaje:string){
    this.snackBar.open(mensaje, "ok!",
    {
      duration:3000 
    })
  }
}
