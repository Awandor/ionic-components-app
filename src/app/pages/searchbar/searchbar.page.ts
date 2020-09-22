import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.page.html',
    styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

    albumes: any[] = [];

    textoBuscar: string = '';

    constructor(private data: DataService) { }

    ngOnInit() {

        this.data.getAlbumes().subscribe((data) => {

            // console.log(data);

            this.albumes = data;

        });

    }

    onSearch(event: any) {

        // console.log(event);

        this.textoBuscar = event.detail.value;

    }

}
