import { Component, OnInit } from '@angular/core';
import { Juegos } from 'src/app/models/juegos';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  juegosCards:Array<Juegos>
  bandera: boolean = false;
  bandera2: boolean = false;

  constructor(private showservice: AuthService) { }

  ngOnInit(): void
  {
    this.showservice.show().subscribe(data => {this.juegosCards = data["data"]})
  }

}
