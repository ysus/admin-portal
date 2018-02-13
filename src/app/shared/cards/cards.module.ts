import { MaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { CardItemComponent } from './card-list/card-item/card-item.component';
import { CardListComponent } from "./card-list/card-list.component";
import { SharedModule } from '../shared.module';

@NgModule({
    imports:[
        CommonModule,
        MaterialModule
    ],
    declarations: [
        CardListComponent,
        CardItemComponent
    ],
    exports :[
        CardListComponent,
        CardItemComponent
    ]
})
export class CardsModule { }
