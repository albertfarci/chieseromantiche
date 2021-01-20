import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChiesaDetailPageRoutingModule } from './chiesa-detail-routing.module';

import { ChiesaDetailPage } from './chiesa-detail.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChiesaDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [ChiesaDetailPage]
})
export class ChiesaDetailPageModule {}
