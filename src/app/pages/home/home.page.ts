import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

/* interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
} */

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    componentes: Observable<Componente[]>;

    /* componentes: Componente[] = [
        {
            icon: 'american-football-outline',
            name: 'Action Sheet',
            redirectTo: '/action-sheet'
        },
        {
            icon: 'airplane-outline',
            name: 'Alert',
            redirectTo: '/alert'
        },
        {
            icon: 'beaker',
            name: 'Avatar',
            redirectTo: '/avatar'
        },
        {
            icon: 'albums-outline',
            name: 'Buttons',
            redirectTo: '/buttons'
        },
        {
            icon: 'card-outline',
            name: 'Cards',
            redirectTo: '/cards'
        },
        {
            icon: 'checkbox-outline',
            name: 'Checkboxes',
            redirectTo: '/checkboxes'
        },
        {
            icon: 'calendar',
            name: 'Datetime',
            redirectTo: '/datetime'
        },
        {
            icon: 'add-circle-outline',
            name: 'Fab',
            redirectTo: '/fab'
        },
        {
            icon: 'grid-outline',
            name: 'Grid',
            redirectTo: '/grid'
        },
        {
            icon: 'download-outline',
            name: 'Infinite Scroll',
            redirectTo: '/infinite-scroll'
        },
        {
            icon: 'hammer-outline',
            name: 'Input Forms',
            redirectTo: '/inputs'
        },
        {
            icon: 'list-outline',
            name: 'Lists',
            redirectTo: '/lists'
        },
        {
            icon: 'list-outline',
            name: 'Reorder Lists',
            redirectTo: '/list-reorder'
        },
        {
            icon: 'reload-circle-outline',
            name: 'Loading',
            redirectTo: '/loading'
        }

    ]; */

    constructor(private menuCtrl: MenuController, private dataService: DataService) { }

    ngOnInit() {

        this.componentes = this.dataService.getMenuOptions();

    }

    mostrarMenu() {

        console.log('mostrarMenu');

        /* Si no especifico in id open abrirá el primer menu que haya */
        this.menuCtrl.open('first');
    }

}
