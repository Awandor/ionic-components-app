import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fab',
    templateUrl: './fab.page.html',
    styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {

    public data = Array(100); // Crea un arreglo de 100 elementos vacíos

    constructor() { }

    ngOnInit() {
    }

}
