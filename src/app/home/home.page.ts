import { Component } from '@angular/core';
import { ChieseRomaneService } from '../shared/services/chiese-romane.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HomeTemplateSettingsService } from './services/home-template-settings.service';
import { LisMapModel, LIST_MAP_CONFIGURATION, ListMapTypes } from './models/list-map-settings.model';
import { GeoLocationService } from '../shared/services/geoLocation.service';

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
  constructor(
    private chieseRomaneService: ChieseRomaneService,
    private homeTemplateSettingsService: HomeTemplateSettingsService,
    public geolocation: GeoLocationService) { }

  ionViewDidEnter() {

    this.listMapSettingsConfiguration = LIST_MAP_CONFIGURATION.get(ListMapTypes.listVisualization);

      data => {
        this.chieseRomaneOld = data
        this.chieseRomane = data
      }
    )


    this.geolocation.currentPosition.subscribe(
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

}
