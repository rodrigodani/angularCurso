import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
//crear un modulo lamando contadormodule 



//modulo principal app
//el objetiv de los modulos es ayudarnos a agrupar componentes que tienen sentido entre si 
@NgModule({
  //componentes que se estan utilizando en el modulo
  declarations: [
    AppComponent,
  ],
  //se trae el modulo heroes
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
