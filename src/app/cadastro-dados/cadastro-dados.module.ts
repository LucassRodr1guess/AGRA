import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroDadosPageRoutingModule } from './cadastro-dados-routing.module';

import { CadastroDadosPage } from './cadastro-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroDadosPageRoutingModule
  ],
  declarations: [CadastroDadosPage]
})
export class CadastroDadosPageModule {}
