import { Component } from '@angular/core';

@Component({
  //donde se mostrara nuestro componente
  selector: 'app-root',
  //el template url es el archivo html para mostrar con la direccion
  templateUrl: 'app.component.html'
  //el template es codigo html que esta escrito dentro que funciona 
  //template
})
export class AppComponent {
  //se puede mostrar el las variables de aqui en el archivo html con {{}}
  //estos de aqui abajo son identificacdores
  /* title = 'bases';
  //CONTANDOR APP
  numero: number = 10;
  //dentro de la clase no se pone function
  sumar() {
    this.numero +=1;
  }
  restar(){
    this.numero -=1;
  }
  acumular(numero: number){
    this.numero +=numero;
  } */
  public base: number= 5;
  public numero: number=0;
  acumular(base:number){
    this.numero += base;
  }

}
