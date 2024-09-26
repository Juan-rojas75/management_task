import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [
    CardComponent,
    PopupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
