import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgettoPageRoutingModule } from './progetto-routing.module';

import { ProgettoPage } from './progetto.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ProgettoPageRoutingModule
  ],
  declarations: [ProgettoPage]
})
export class ProgettoPageModule {}
