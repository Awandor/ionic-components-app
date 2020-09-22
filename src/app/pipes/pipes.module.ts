import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
    declarations: [
        FiltroPipe
    ],
    imports: [
        // CommonModule // No lo necesitamos es el ngfor...
    ],
    exports: [
        FiltroPipe // Hay que exportarlo para poder usarlo fuera de este módulo
    ]
})
export class PipesModule { }
