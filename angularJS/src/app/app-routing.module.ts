import { NgModule } from "@angular/core";
import {Routes, RouterModule }  from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { JuegosComponent } from "./components/juegos/juegos.component";
import { HomeComponent } from "./components/main/home/home.component";
import { MasDescargadosComponent } from "./components/mas-descargados/mas-descargados.component";
import { ProximamenteComponent } from "./components/proximamente/proximamente.component";
import { RegistrarJuegoComponent } from "./components/registrar-juego/registrar-juego.component";
import { RutaNoValidaComponent } from "./components/ruta-no-valida/ruta-no-valida.component";
import { AuthenticationGuard } from './components/auth/guards/authentication.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo:'/login', pathMatch: 'full'},

  // {path: 'masPopulares', component: HomeComponent, canActivate:[AuthenticationGuard]},
  // {path: 'addGame', component: RegistrarJuegoComponent, canActivate:[AuthenticationGuard]},
  // {path: 'masDescargados', component: MasDescargadosComponent, canActivate:[AuthenticationGuard]},
  // {path: 'proximamente', component: ProximamenteComponent, canActivate:[AuthenticationGuard]},
  // {path: 'juegos', component: JuegosComponent, canActivate:[AuthenticationGuard]},
  // {path:'**', component: RutaNoValidaComponent, canActivate:[AuthenticationGuard]}

  {path: 'masPopulares', component: HomeComponent},
  {path: 'agregarJuego', component: RegistrarJuegoComponent},
  {path: 'masDescargados', component: MasDescargadosComponent},
  {path: 'proximamente', component: ProximamenteComponent},
  {path: 'juegos', component: JuegosComponent},
  {path:'**', component: RutaNoValidaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
