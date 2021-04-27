import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItinerarioDetailPageRoutingModule } from './itinerario-detail-routing.module';

import { ItinerarioDetailPage } from './itinerario-detail.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItinerarioDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [ItinerarioDetailPage]
})
export class ItinerarioDetailPageModule { }
