import { Component, OnInit } from '@angular/core';

// Importamos ActionSheetController
import { ActionSheetController } from '@ionic/angular';

@Component({
    selector: 'app-action-sheet',
    templateUrl: './action-sheet.page.html',
    styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

    constructor(public actionSheetCtrl: ActionSheetController) { }

    ngOnInit() {
    }

    // async delente de un método indica que el método va a retornar una promesa

    async presentActionSheet() {

        // await = espera a que esté creado actionSheetCtrl y almacénalo en la constante

        const actionSheet = await this.actionSheetCtrl.create({
            header: 'Albums',
            cssClass: 'my-custom-class',
            backdropDismiss: false, // Impide cerrar al hacer click fuera
            buttons: [{
                text: 'Delete',
                role: 'destructive', // Rojo en IOS
                cssClass: 'rojo', // Podemos aplicar clases de css, la clase está en global.scss
                icon: 'trash',
                handler: () => {
                    console.log('Delete clicked');
                }
            }, {
                text: 'Share',
                icon: 'share',
                handler: () => {
                    console.log('Share clicked');
                }
            }, {
                text: 'Play (open modal)',
                icon: 'caret-forward-circle',
                handler: () => {
                    console.log('Play clicked');
                }
            }, {
                text: 'Favorite',
                icon: 'heart',
                handler: () => {
                    console.log('Favorite clicked');
                }
            }, {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked'); // Este método se dispara al hacer click fuera
                }
            }]
        });

        // Muestra la constante
        await actionSheet.present();
    }
}
