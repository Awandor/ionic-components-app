import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importamos HeaderComponent
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';

// Importamos PopoverContentComponent
import { PopoverContentComponent } from './popover-content/popover-content.component';

@NgModule({
    declarations: [
        HeaderComponent,
        PopoverContentComponent
    ],
    // Lo exportamos también para que pueda ser usado fuera
    exports: [
        HeaderComponent,
        PopoverContentComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ]
})
export class ComponentsModule { }
