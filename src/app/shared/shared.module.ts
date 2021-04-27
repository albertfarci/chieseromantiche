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
import { IBeacon } from '@ionic-native/ibeacon/ngx';
import { LoadingComponent } from './component/loading/loading.component';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
import { TranslatePipe } from './pipes/translate.pipe';
import { MapComponent } from './component/map/map.component';
import { NoFoundComponent } from './component/no-found/no-found.component';
import { FirebaseService } from './services/firebase.service';
import { Device } from '@ionic-native/device/ngx';
import { GeoLocationService } from './services/geoLocation.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

@NgModule({
  declarations: [NoFoundComponent, MapComponent, SharedComponent, ChiesaItemComponent, ChieseListComponent, ChiesaDetailComponent, TitleDeleteComaPipe, TextDeleteSpanPipe, TranslatePipe, LoadingComponent],
  imports: [CommonModule, SharedRoutingModule, HttpClientModule],
  exports: [SharedComponent, ChiesaItemComponent, ChieseListComponent, ChiesaDetailComponent, LoadingComponent, TranslatePipe, MapComponent, NoFoundComponent],
  providers: [AndroidPermissions, Geolocation, LocationAccuracy, ChieseRomaneService, NativeStorage, Toast, IBeacon, BluetoothLE, FirebaseService, Device, GeoLocationService]
})
export class SharedModule { }