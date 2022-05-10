import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //visibles afuera de este modulo
    exports:[
        ListadoComponent
    ],
    //modulos 
    imports:[
        //el commonmodule ofrece el ngfor y ngif 
        CommonModule
    ]
})
export class HeroesModule{

}