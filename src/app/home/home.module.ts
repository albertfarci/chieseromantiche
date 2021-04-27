import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MapListTabsComponent } from './components/map-list-tabs/map-list-tabs.component';
import { HomeLoaderComponent } from './components/home-loader/home-loader.component';
import { ChieseResultNumberComponent } from './components/chiese-result-number/chiese-result-number.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [
    HomePage,
    MapListTabsComponent,
    HomeLoaderComponent,
    ChieseResultNumberComponent
  ]
})
export class HomePageModule { }
