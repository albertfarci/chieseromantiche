// app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tablinks',
    loadChildren: () => import('./tablinks/tablinks.module').then(m => m.TablinksPageModule)
  },
  {
    path: 'preferiti',
    loadChildren: () => import('./preferiti/preferiti.module').then(m => m.PreferitiPageModule)
  },
  {
    path: 'chiesa-detail',
    loadChildren: () => import('./chiesa-detail/chiesa-detail.module').then(m => m.ChiesaDetailPageModule)
  },
  {
    path: 'itinerario-item-detail',
    loadChildren: () => import('./itinerario-item-detail/itinerario-item-detail.module').then(m => m.ItinerarioItemDetailPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tablinks/tablinks.module').then(m => m.TablinksPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }