import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Juegos } from '../models/juegos';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = environment.apiURL;
  token: string;

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private router:Router) { }

  register(user:User):Observable<any>
  {
    return this.http.post(`${this.apiURL}users`, user);
  }

  login(user:User):Observable<any>
  {
    return this.http.post(`${this.apiURL}login`, user);
  }

  show(): Observable<any>
  {
    return this.http.get(`${this.apiURL}juegos`);
  }

  makeGame(juegos:Juegos):Observable<any>
  {
    return this.http.post(`${this.apiURL}crearJuego`, juegos);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(this.token);
  }

}
