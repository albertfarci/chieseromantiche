import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItinerarioItemDetailPageRoutingModule } from './itinerario-item-detail-routing.module';

import { ItinerarioItemDetailPage } from './itinerario-item-detail.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItinerarioItemDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [ItinerarioItemDetailPage]
})
export class ItinerarioItemDetailPageModule { }
