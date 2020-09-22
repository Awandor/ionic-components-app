import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-segment',
    templateUrl: './segment.page.html',
    styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

    superHeroes: Observable<any>; // Creamos un observable que manejamos en el HTML con async

    textoBuscar: string = '';

    constructor(private dataService: DataService) { }

    ngOnInit() {

        this.superHeroes = this.dataService.getHeros();
    }

    segmentChanged(event: any) {

        console.log(event);

        if (event.detail.value === 'All') {

            this.textoBuscar = '';

            return;
        }

        this.textoBuscar = event.detail.value;

    }
}
