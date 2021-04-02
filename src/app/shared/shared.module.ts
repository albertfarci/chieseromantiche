import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { SharedComponent } from "./component/shared/shared.component";
import { ChiesaItemComponent } from "./component/chiesa-item/chiesa-item.component";
import { ChieseListComponent } from "./component/chiese-list/chiese-list.component";
import { HttpClientModule } from '@angular/common/http';
import { ChieseRomaneService } from "./services/chiese-romane.service";
import { ChiesaDetailComponent } from "./component/chiesa-detail/chiesa-detail.component";
import { TitleDeleteComaPipe } from './pipes/title.pipe';
import { TextDeleteSpanPipe } from './pipes/text.pipe';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Toast } from '@ionic-native/toast/ngx';

@NgModule({
  declarations: [SharedComponent, ChiesaItemComponent, ChieseListComponent, ChiesaDetailComponent, TitleDeleteComaPipe, TextDeleteSpanPipe],
  imports: [CommonModule, SharedRoutingModule, HttpClientModule],
  exports: [SharedComponent, ChiesaItemComponent, ChieseListComponent, ChiesaDetailComponent],
  providers: [ChieseRomaneService, NativeStorage, Toast]
})
export class SharedModule { }