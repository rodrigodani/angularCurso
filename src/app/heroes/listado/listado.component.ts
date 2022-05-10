import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
//onInit ciclo de vida
export class ListadoComponent  {
  //directiva ng for
  heroes: string[]=['spiderman','ironman','hulk'];
  public heroeBorrado:string='';
  seBorroHeroe = false;
  borrarHeroe():void{
    this.heroeBorrado= this.heroes.pop() || '';
    this.seBorroHeroe=true;
    
  }
  

}
