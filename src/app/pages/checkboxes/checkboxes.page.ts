import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-checkboxes',
    templateUrl: './checkboxes.page.html',
    styleUrls: ['./checkboxes.page.scss'],
})
export class CheckboxesPage implements OnInit {

    public form = [
        { val: 'Pepperoni', isChecked: true },
        { val: 'Sausage', isChecked: false },
        { val: 'Mushroom', isChecked: false }
    ];

    datos = [
        {
            name: 'primary',
            isChecked: false
        },
        {
            name: 'secondary',
            isChecked: true
        },
        {
            name: 'success',
            isChecked: false
        },
        {
            name: 'warning',
            isChecked: true
        }
    ]

    constructor(public alertCtrl: AlertController) { }

    ngOnInit() {
    }

    onClick(dato: any) {

        console.log(dato.isChecked);

        this.presentAlert(dato.name, dato.isChecked);
    }

    async presentAlert(nombre: string, mensaje: string) {
        const alert = await this.alertCtrl.create({
            header: `The ${nombre} checkbox is checked`,
            message: mensaje,
            buttons: ['OK']
        });

        await alert.present();
    }

}
