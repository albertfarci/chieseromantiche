import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChiesaDetailPage } from './chiesa-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ChiesaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChiesaDetailPageRoutingModule {}
