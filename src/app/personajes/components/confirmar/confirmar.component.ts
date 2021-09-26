import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

   
  constructor(private snackBar: MatSnackBar,
    private dialogRef:MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Personaje) { }

  ngOnInit(): void {
    
  }

  borrar(){
    this.dialogRef.close(true)
    this.snackBar.open("Personaje borrado correctamente","Aceptar",{
      duration:3000 
    })
  }

  cerrar(){
    this.dialogRef.close()
      
  }
}
