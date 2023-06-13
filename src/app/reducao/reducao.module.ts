import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReducaoPageRoutingModule } from './reducao-routing.module';

import { ReducaoPage } from './reducao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReducaoPageRoutingModule
  ],
  declarations: [ReducaoPage]
})
export class ReducaoPageModule {}
