import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItinerarioItemDetailPage } from './itinerario-item-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ItinerarioItemDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerarioItemDetailPageRoutingModule {}
