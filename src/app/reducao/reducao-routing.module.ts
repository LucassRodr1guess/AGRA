import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReducaoPage } from './reducao.page';

const routes: Routes = [
  {
    path: '',
    component: ReducaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReducaoPageRoutingModule {}
