import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
    selector: 'app-lists',
    templateUrl: './lists.page.html',
    styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

    usuarios: Observable<any>;

    @ViewChild('slidingList') myIonList: IonList;

    constructor(private myDataService: DataService) { }

    ngOnInit() {

        // Hay que parar y levantar el servidor de nuevo para que funcione

        this.myDataService.getUsuarios().subscribe((datos) => console.log(datos));

        this.usuarios = this.myDataService.getUsuarios();

    }

    onFavorite(name: string) {

        console.log('Favorite clicked on ' + name);

        console.log(this.myIonList);

        this.myIonList.closeSlidingItems();

    }

}
