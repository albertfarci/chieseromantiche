import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItinerarioDetailPage } from './itinerario-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ItinerarioDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerarioDetailPageRoutingModule {}
