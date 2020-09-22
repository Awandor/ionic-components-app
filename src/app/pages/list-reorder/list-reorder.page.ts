import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-reorder',
    templateUrl: './list-reorder.page.html',
    styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

    heros: any[] = ['Superman', 'Hulk', 'Flash', 'Green Lantern', 'Captain America', 'Wonder Woman'];

    myDisabled: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    doReorder(event: any) {

        console.log(event);

        /* Si quiero cambiar el orden en el arreglo primero sacamos el elemento movido del arreglo,
        el método splice retorna un nuevo array con los elementos eliminados, en nuestro caso sólo uno */

        const movedItem = this.heros.splice(event.detail.from, 1)[0];

        console.log('movedItem', movedItem);

        /* Ahora insertamos movedItem a la posición to */

        this.heros.splice(event.detail.to, 0, movedItem);

        event.detail.complete();

        console.log(this.heros);
    }

    reorderToggle() {
        console.log('toggle');

        this.myDisabled = !this.myDisabled;
    }

}
