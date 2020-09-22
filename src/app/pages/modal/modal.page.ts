import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalContentPage } from '../modal-content/modal-content.page';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

    constructor(public modalController: ModalController) { }

    ngOnInit() {
    }

    async mostrarModal() {

        const modal = await this.modalController.create({
            component: ModalContentPage,
            cssClass: 'my-custom-class',
            componentProps: {
                nombre: 'Dan Anders Häggblom',
                pais: 'Sweden'
            }
        });

        await modal.present();

        // const respuesta = await modal.onDidDismiss();

        // console.log(respuesta);

        /* aplicando desestructuración */

        const { data } = await modal.onDidDismiss(); // Se dispara 

        console.log(data);
    }

}
