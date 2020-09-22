import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-popover-content',
    templateUrl: './popover-content.component.html',
    styleUrls: ['./popover-content.component.scss'],
})
export class PopoverContentComponent implements OnInit {

    items = Array(7);

    constructor(private popoverCtrl: PopoverController) { }

    ngOnInit() { }

    onClick(item: number) {

        console.log(item);

        this.popoverCtrl.dismiss({ item: item });
    }
}
