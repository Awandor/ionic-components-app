import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.page.html',
    styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

    /* Existe HTMLIonLoadingElement que es el tipo de la promesa que retorna create */

    loading: HTMLIonLoadingElement;

    constructor(public myLoadingCtrl: LoadingController) { }

    ngOnInit() {
    }

    async presentLoading() {

        this.loading = await this.myLoadingCtrl.create({
            message: 'Please wait...'
        });
        await this.loading.present();

    }

    mostrarLoading() {

        this.presentLoading();

        setTimeout(() => {
            this.loading.dismiss();
        }, 2000);

    }

}
