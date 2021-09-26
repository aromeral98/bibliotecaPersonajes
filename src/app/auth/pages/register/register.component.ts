import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { EmailValidatorService } from '../../validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
  #form-style{
    background-color:#424242;
    padding:25px;
  }`
  ]
})
export class RegisterComponent implements OnInit {

  hide = true;

 
  
  miFormulario:FormGroup=this.fb.group({
    usuario:[,[Validators.required, Validators.minLength(3),Validators.pattern(this.emailValidator.usuarioPattern)] ],
    email:[, [Validators.required, Validators.minLength(3),Validators.pattern(this.emailValidator.emailPattern)],[this.emailValidator]],
    password:["",[Validators.required,Validators.minLength(6)]],

  })

  get emailErrorMsg():string{
    const errors=this.miFormulario.get('email')?.errors;
    if(errors?.required ){
      return "El email es obligatorio"
    }else if(errors?.pattern ){
      return "El correo introducido cumple con el formato email"
    }else if(errors?.emailEscogido){
      return "El correo ya se encuentra registrado"
    }
    return ""
      
    
  }
  constructor(private fb:FormBuilder,
    private emailValidator :EmailValidatorService,
    private authService:AuthService,
    private snackBar:MatSnackBar) { }

  ngOnInit(){
    this.miFormulario.reset({
      usuario:"",
      email:""
      })
  }
  campoEsValido(campo:string){
   return this.miFormulario.controls[campo].errors
          && this.miFormulario.controls[campo].touched
  }
  campoNoValido(campo:string){
    return this.miFormulario.controls[campo].invalid &&
    this.miFormulario.controls[campo].touched
  }
  registrar(){
    if(this.miFormulario.invalid){
    this.miFormulario.markAllAsTouched()
    return
  }
    this.authService.registrar(this.miFormulario.value)
      .subscribe(resp=>{
        this.mostrarSnackBar('Registro Creado')
      })
    this.miFormulario.reset()
  }
  mostrarSnackBar(mensaje:string){
    this.snackBar.open(mensaje, "OK",
    {
      duration:3000 
    })
  }
}
