import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-modal-content',
    templateUrl: './modal-content.page.html',
    styleUrls: ['./modal-content.page.scss'],
})
export class ModalContentPage implements OnInit {

    @Input() nombre: string;
    @Input() pais: string;

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    salirSinDatos() {

        this.modalCtrl.dismiss();

    }

    salirConDatos() {

        this.modalCtrl.dismiss({
            nombre: 'Felipe',
            pais: 'España'
        });
    }

}
