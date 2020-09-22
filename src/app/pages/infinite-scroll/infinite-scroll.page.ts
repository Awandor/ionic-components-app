import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-infinite-scroll',
    templateUrl: './infinite-scroll.page.html',
    styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

    data: any[] = Array(20);

    /* Hay otra manera de controlar el complete de Infinite Scroll
    para ello hacemos uso de @ViewChild */

    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    constructor() { }

    ngOnInit() {
    }

    cargarDatos(evento: any) {

        if (this.data.length > 50) {

            this.infiniteScroll.complete();
            this.infiniteScroll.disabled = true;

            return; // para que se salga del método

        }

        console.log(evento);

        setTimeout(() => {

            const nuevoArreglo = Array(20);

            this.data.push(...nuevoArreglo);

            // evento.target.complete(); // también funciona

            this.infiniteScroll.complete();

        }, 1500);

    }

}
