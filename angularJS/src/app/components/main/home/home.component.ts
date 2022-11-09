import { Component, OnInit } from '@angular/core';
import { Juegos } from 'src/app/models/juegos';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  juegosCards:Array<Juegos>
  bandera: boolean = false;
  bandera2: boolean = false;

  constructor(private showservice: AuthService) { }

  ngOnInit(): void
  {
    this.showservice.show().subscribe(data => {this.juegosCards = data["data"]})
  }


  ocultarJuegos()
  {
    if(this.bandera == false)
    {
      this.bandera = true;
    }
    else
    {
      this.bandera = false
    }
  }

  ocultarJuegosDos()
  {
    if(this.bandera2 == false)
    {
      this.bandera2 = true;
    }
    else
     {
      this.bandera2 = false
    }
  }

}
