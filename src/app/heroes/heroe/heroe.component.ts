import { Component } from "@angular/core";




@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent {
    public nombre:string = "ironman";
    public edad: number=5;
    //se llama directo sin ejecutar
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return this.nombre + " - " + this.edad
    }

    cambiarNombre():void{
        this.nombre ='spiderman';

    }

    cambiaEdad():void{
        this.edad = 30
    }
}