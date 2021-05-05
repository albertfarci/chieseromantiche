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
import { HomeContentComponent } from '../home/components/home-content/home-content.component';
import { ItinerarioItemDetailComponent } from './component/itinerario-item-detail/itinerario-item-detail.component';
import { SQLite } from "@ionic-native/sqlite/ngx";
import { StorageService } from "./services/storage.service";

@NgModule({
  declarations: [ItinerarioItemDetailComponent, HomeContentComponent, NoFoundComponent, MapComponent, SharedComponent, ChiesaItemComponent, ChieseListComponent, ChiesaDetailComponent, TitleDeleteComaPipe, TextDeleteSpanPipe, TranslatePipe, LoadingComponent],
  imports: [CommonModule, SharedRoutingModule, HttpClientModule],
  exports: [TitleDeleteComaPipe, TextDeleteSpanPipe, TranslatePipe, ItinerarioItemDetailComponent, HomeContentComponent, SharedComponent, ChiesaItemComponent, ChieseListComponent, ChiesaDetailComponent, LoadingComponent, MapComponent, NoFoundComponent],
  providers: [SQLite ,AndroidPermissions, Geolocation, LocationAccuracy, ChieseRomaneService, NativeStorage, Toast, IBeacon, BluetoothLE, FirebaseService, Device, GeoLocationService, StorageService]
})
export class SharedModule { }