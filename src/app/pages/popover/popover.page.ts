import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PopoverContentComponent } from '../../components/popover-content/popover-content.component';

@Component({
    selector: 'app-popover',
    templateUrl: './popover.page.html',
    styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

    @Input() item: number;

    constructor(public popoverController: PopoverController) { }

    ngOnInit() {
    }

    async mostrarPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: PopoverContentComponent,
            cssClass: 'my-custom-class',
            event: ev,
            translucent: true,
            backdropDismiss: false // Impide que se pueda cerrar el popover clicando fuera
        });

        await popover.present();

        // const respuesta = await popover.onDidDismiss();

        // console.log(respuesta);

        /* aplicando desestructuración */

        const { data } = await popover.onWillDismiss(); // onWillDismiss es más rápido

        console.log(data.item);
    }

}
