import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-slides',
    templateUrl: './slides.page.html',
    styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

    slides: { img: string, titulo: string, desc: string }[] = [
        {
            img: '/assets/images/slides/photos.svg',
            titulo: 'Comparte Fotos',
            desc: 'Mira y comparte increíbles fotos de todo el mundo'
        },
        {
            img: '/assets/images/slides/music-player-2.svg',
            titulo: 'Escucha Música',
            desc: 'Toda tu música favorita está aquí'
        },
        {
            img: '/assets/images/slides/calendar.svg',
            titulo: 'Nunca olvides nada',
            desc: 'El mejor calendario del mundo a tu disposición'
        },
        {
            img: '/assets/images/slides/placeholder-1.svg',
            titulo: 'Tu ubicación',
            desc: 'Siempre sabremos donde estás!'
        }
    ];

    slideOpts = {
        initialSlide: 1,
        speed: 400
    };

    /* Vamos a usar el navegador de Angular NavController  */

    constructor(public navCtrl: NavController) { }

    ngOnInit() {
    }

    /* Esta es otra manera de navegar */

    onClick() {

        this.navCtrl.navigateBack('/'); // Si no hay ruta hacia atrás que vaya a '/'

    }

}
