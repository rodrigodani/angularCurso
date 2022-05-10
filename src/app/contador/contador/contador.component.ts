import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>hola mundo</h1>
    <!-- los parentecis son eventos y acepta codigo -->
    <!-- no se aconseja la logica aqui a menos que sea sencillo -->
    <h1>base nuevo componente {{ base }}</h1>
    <button (click)="acumular(base)">{{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  public base: number = 5;
  public numero: number = 0;
  acumular(base: number) {
    this.numero += base;
  }
}
