import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Juegos } from 'src/app/models/juegos';
import { AuthService } from 'src/app/services/auth.service';
import { errorMessage, successDialog } from 'src/app/functions/alerts';

@Component({
  selector: 'app-registrar-juego',
  templateUrl: './registrar-juego.component.html',
  styleUrls: ['./registrar-juego.component.css']
})
export class RegistrarJuegoComponent implements OnInit {

  makeGameForm: FormGroup;
  juego: Juegos;

  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router)
  {
    this.createForm();
  }

  ngOnInit(): void
  {
  }

  juegoReg(): void
  {

    if(this.makeGameForm.invalid)
    {

      return Object.values(this.makeGameForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
    }
    else
    {
      this.setGame();
      this.authService.makeGame(this.juego).subscribe((data:any) => {
        successDialog('Registro del juego exitoso');
        this.router.navigate(['/juegos']);
    },error => {
      errorMessage('Ocurrio un error incorrectos');
      })
    }
  }

  createForm(): void
  {
    this.makeGameForm = this.fb.group({
      titulo: ['',[Validators.required]],
      lanzamientoFecha: ['',[Validators.required]],
      descripcion: ['',[Validators.required]],
      clasificacion: ['',[Validators.required]],
      descargas: ['',[Validators.required]],
      comingSoon: ['']
        })
  }

  get tituloValidate(){
    return(
      this.makeGameForm.get('titulo')?.invalid && this.makeGameForm.get('titulo')?.touched
      );
  }

  get clasificacionValidate(){
    return(
      this.makeGameForm.get('clasificacion')?.invalid && this.makeGameForm.get('clasificacion')?.touched
      );
  }

  get descripcionValidate(){
    return(
      this.makeGameForm.get('descripcion')?.invalid && this.makeGameForm.get('descripcion')?.touched
      );
  }

  get fechaLanzamientoFechaValidate(){
    return(
      this.makeGameForm.get('lanzamientoFecha')?.invalid && this.makeGameForm.get('lanzamientoFecha')?.touched
      );
  }

  get numeroDescargasValidate(){
    return(
      this.makeGameForm.get('descargas')?.invalid && this.makeGameForm.get('descargas')?.touched
      );
  }


  setGame():void
  {
    this.juego = {
      titulo: this.makeGameForm.get('titulo')?.value,
      lanzamientoFecha: this.makeGameForm.get('lanzamientoFecha')?.value,
      descripcion: this.makeGameForm.get('descripcion')?.value,
      clasificacion: this.makeGameForm.get('clasificacion')?.value,
      descargas: this.makeGameForm.get('descargas')?.value,
      comingSoon: this.makeGameForm.get('comingSoon')?.value,
    }
  }

}
