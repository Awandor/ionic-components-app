import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Componente } from '../interfaces/interfaces';

import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getUsuarios() {

        return this.http.get('https://jsonplaceholder.typicode.com/users');

    }

    getMenuOptions() {

        /* Hemos creado el tipo Componente en interfaces */

        return this.http.get<Componente[]>('/assets/data/menu-options.json');
    }

    getAlbumes() {

        return this.http.get<any>('https://jsonplaceholder.typicode.com/albums');
    }

    getHeros() {

        /* Vamos a aplicar un delay en la obtención de los datos para simular un servidor */

        return this.http.get<any[]>('/assets/data/superheroes.json').pipe(delay(1500));
    }
}
