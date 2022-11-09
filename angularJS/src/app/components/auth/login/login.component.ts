import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { errorMessage, successDialog } from 'src/app/functions/alerts';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup
  user:User

  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router)
  {
    this.createForm();
  }

  ngOnInit(): void
  {

  }


  login(): void
  {
    if(this.LoginForm.invalid)
    {
      return Object.values(this.LoginForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
    }
    else
    {
      this.setUser();
      this.authService.login(this.user).subscribe((data:any) => {
        successDialog('Iniciando...').then(() => {
            this.router.navigate(['/juegos']);
        });
    },error => {
      errorMessage('Usuario o contraseña incorrecta');
    })
  }

  }

  get emailValidate(){
    return(
      this.LoginForm.get('email')?.invalid && this.LoginForm.get('email')?.touched
      );
  }

  get passwordValidate()
  {
    return(
      this.LoginForm.get('password')?.invalid && this.LoginForm.get('password')?.touched
      );
  }

  createForm(): void
  {
    this.LoginForm = this.fb.group({
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['',[Validators.required]]
    })
  }

  setUser():void
  {
    this.user = {
      nombre: this.LoginForm.get('nombre')?.value,
      email: this.LoginForm.get('email')?.value,
      password: this.LoginForm.get('password')?.value,
    }
  }

}
