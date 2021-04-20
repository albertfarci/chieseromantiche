import { Component } from '@angular/core';
import { ChieseRomaneService } from '../shared/services/chiese-romane.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HomeTemplateSettingsService } from './services/home-template-settings.service';
import { LisMapModel, LIST_MAP_CONFIGURATION, ListMapTypes } from './models/list-map-settings.model';
import { FirebaseService } from '../shared/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chieseRomane: Observable<any>;

  hideFilter: boolean = false;
  listMapSettingsConfiguration: LisMapModel = LIST_MAP_CONFIGURATION.get(ListMapTypes.listVisualization);

  constructor(
    private chieseRomaneService: ChieseRomaneService,
    private homeTemplateSettingsService: HomeTemplateSettingsService,
    private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.chieseRomane = this.chieseRomaneService.getAllChiese()
  }

  filterList(evt) {
    if (evt.srcElement.value == "") {
      this.hideFilter = false;
      this.chieseRomane = this.chieseRomaneService.getAllChiese();
    } else {
      this.hideFilter = true;
      this.chieseRomane = this.chieseRomaneService.getAllChiese().pipe(
        map(result =>
          result.filter(one => one.title.rendered.includes(evt.srcElement.value))
        )
      )
    }

  }

  getListMapSettings(listMapTypes) {
    this.listMapSettingsConfiguration = this.homeTemplateSettingsService.getListMapSettings(listMapTypes);
  }

}
