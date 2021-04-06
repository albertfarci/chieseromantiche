import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { DashboardBeaconDataService } from './services/dashboard-beacon-data.service';
import { SharedModule } from '../shared/shared.module';
import { VirtualTourComponent } from './components/virtual-tour/virtual-tour.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    SharedModule
  ],
  providers: [DashboardBeaconDataService],
  declarations: [DashboardPage, VirtualTourComponent]
})
export class DashboardPageModule { }
