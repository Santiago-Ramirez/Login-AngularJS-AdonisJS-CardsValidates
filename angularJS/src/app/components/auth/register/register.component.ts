import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { errorMessage, successDialog, timeMessage } from 'src/app/functions/alerts';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  user:User

  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router)
  {
    this.createForm();
  }

  ngOnInit(): void
  {

  }

  register(): void
  {
    if(this.registerForm.invalid)
    {
      return Object.values(this.registerForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
    }
    else
    {
      this.setUser();
      this.authService.register(this.user).subscribe((data:any) => {
          successDialog('Registro completado');
          this.router.navigate(['/login']);
      },error => {
        errorMessage('Ocurrio un error');
      })
    }
  }

  createForm(): void
  {
    this.registerForm = this.fb.group({
      nombre: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['',[Validators.required]],
      password2: ['',[Validators.required]],

    })
  }

  get nombreValidate()
  {
    return(
      this.registerForm.get('nombre')?.invalid && this.registerForm.get('nombre')?.touched
      );
  }


  get emailValidate(){
    return(
      this.registerForm.get('email')?.invalid && this.registerForm.get('email')?.touched
      );
  }

  get passwordValidate()
  {
    return(
      this.registerForm.get('password')?.invalid && this.registerForm.get('password')?.touched
      );
  }

  get password2Validate()
  {
    const pass = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;
    return pass == pass2 ? false : true;
  }

  setUser():void
  {
    this.user = {
      nombre: this.registerForm.get('nombre')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
    }
  }

}
