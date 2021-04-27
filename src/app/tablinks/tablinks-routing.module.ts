// tablinks-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'preferiti',
        loadChildren: () => import('../preferiti/preferiti.module').then(m => m.PreferitiPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'itinerario-detail',
        loadChildren: () => import('../itinerario-detail/itinerario-detail.module').then(m => m.ItinerarioDetailPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/home',
        pathMatch: 'full'
      }, {
        path: 'chiesa-detail/:id',
        loadChildren: () => import('../chiesa-detail/chiesa-detail.module').then(m => m.ChiesaDetailPageModule)
      }, {
        path: 'itinerario-item-detail/:id',
        loadChildren: () => import('../itinerario-item-detail/itinerario-item-detail.module').then(m => m.ItinerarioItemDetailPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule { }