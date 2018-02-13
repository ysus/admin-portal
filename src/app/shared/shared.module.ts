import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { CardsModule } from './cards/cards.module';

@NgModule({
    declarations:[],
    exports:[
        CommonModule,
        MaterialModule,
        CardsModule
    ]
})
export class SharedModule{

}