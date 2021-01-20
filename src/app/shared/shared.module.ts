import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { SharedComponent } from "./component/shared/shared.component";
import { ChiesaItemComponent } from "./component/chiesa-item/chiesa-item.component";
import { ChieseListComponent } from "./component/chiese-list/chiese-list.component";
import { HttpClientModule } from '@angular/common/http';
import { ChieseRomaneService } from "./services/chiese-romane.service";
import { ChiesaDetailComponent } from "./component/chiesa-detail/chiesa-detail.component";

@NgModule({
  declarations: [SharedComponent, ChiesaItemComponent, ChieseListComponent, ChiesaDetailComponent],
  imports: [CommonModule, SharedRoutingModule, HttpClientModule],
  exports: [SharedComponent, ChiesaItemComponent, ChieseListComponent, ChiesaDetailComponent],
  providers : [ChieseRomaneService]
})
export class SharedModule {}