import { Component } from '@angular/core';
import { ChieseRomaneService } from '../shared/services/chiese-romane.service';
import { map, takeUntil } from 'rxjs/operators';
import { HomeTemplateSettingsService } from './services/home-template-settings.service';
import { LisMapModel, LIST_MAP_CONFIGURATION, ListMapTypes } from './models/list-map-settings.model';
import { GeoLocationService } from '../shared/services/geoLocation.service';
import { Toast } from '@ionic-native/toast/ngx';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chieseRomaneOld;
  chieseRomane;

  hideFilter: boolean = false;
  listMapSettingsConfiguration: LisMapModel
  currentPosition

  destroy$: Subject<boolean>;

  constructor(
    private toast: Toast,
    private chieseRomaneService: ChieseRomaneService,
    private homeTemplateSettingsService: HomeTemplateSettingsService,
    public geolocation: GeoLocationService) { }

  ionViewDidEnter() {

    this.destroy$ = new Subject<boolean>();

    this.listMapSettingsConfiguration = LIST_MAP_CONFIGURATION.get(ListMapTypes.listVisualization);

    this.chieseRomaneService.getAllChieseAndIntineraries()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        data => {
          this.alert("CHIESER ROMANICHE")
          this.chieseRomaneOld = data
          this.chieseRomane = data
        },
        error => {
          this.alert(JSON.stringify(error))
        }
      )


    this.geolocation.currentPosition
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        data => {
          this.currentPosition = data
        }
      )

    this.geolocation.getLocationCoordinatesSetup()

  }

  filterList(evt) {
    if (evt.srcElement.value == "") {
      this.hideFilter = false;
      this.chieseRomane = this.chieseRomaneOld;
    } else {
      this.hideFilter = true;
      this.chieseRomane = this.chieseRomaneOld
        .filter(one => one.title.rendered.includes(evt.srcElement.value))
    }

  }

  getListMapSettings(listMapTypes) {
    this.listMapSettingsConfiguration = this.homeTemplateSettingsService.getListMapSettings(listMapTypes);
  }

  /* toast message */
  alert(msg) {
    this.toast.show(msg, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }

  ionViewDidLeave(): void {
    console.log("ionViewDidLeave")
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
