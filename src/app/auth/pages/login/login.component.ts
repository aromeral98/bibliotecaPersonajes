import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  hide = true;
  error=false;
  
  miFormulario:FormGroup=this.fb.group({
    email:[,[Validators.required] ],
    password:[,[Validators.required]],

  })

  constructor(private router:Router,
    private authService:AuthService,
    private fb:FormBuilder,) { }

  login(email:string,password:any){
  
    email=this.miFormulario.get('email')?.value
    password=this.miFormulario.get('password')?.value
    this.authService.login(email,password)
    .subscribe(resp=>{

      if(resp.length>0){
        console.log(resp)
        localStorage.setItem('token', resp.id)
        this.router.navigate(['heroes/listado'])
      }else{
        this.error=true
      }
    }
    )
    
  }
  
}
