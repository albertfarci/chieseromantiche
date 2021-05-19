import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgettoPage } from './progetto.page';

const routes: Routes = [
  {
    path: '',
    component: ProgettoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgettoPageRoutingModule {}
