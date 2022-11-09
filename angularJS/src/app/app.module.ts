import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/main/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrarJuegoComponent } from './components/registrar-juego/registrar-juego.component';
import { MasDescargadosComponent } from './components/mas-descargados/mas-descargados.component';
import { ProximamenteComponent } from './components/proximamente/proximamente.component';
import { RutaNoValidaComponent } from './components/ruta-no-valida/ruta-no-valida.component';
import { JuegosComponent } from './components/juegos/juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    RegistrarJuegoComponent,
    MasDescargadosComponent,
    ProximamenteComponent,
    RutaNoValidaComponent,
    JuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
