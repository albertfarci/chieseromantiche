import { Component } from '@angular/core';
import { ChieseRomaneService } from '../shared/services/chiese-romane.service';
import { Observable } from 'rxjs';
import { LisMapModel, LIST_MAP_CONFIGURATION, ListMapTypes } from '../home/models/list-map-settings.model';
import { HomeTemplateSettingsService } from '../home/services/home-template-settings.service';

@Component({
  selector: 'app-itinerario-detail',
  templateUrl: './itinerario-detail.page.html',
  styleUrls: ['./itinerario-detail.page.scss'],
})
export class ItinerarioDetailPage {


  listMapSettingsConfiguration: LisMapModel = LIST_MAP_CONFIGURATION.get(ListMapTypes.listVisualization);

  chieseRomane: Observable<any>;

  constructor(
    private chieseRomaneService: ChieseRomaneService,
    private homeTemplateSettingsService: HomeTemplateSettingsService, ) { }


  ionViewDidEnter(): void {
    this.chieseRomane = this.chieseRomaneService.getAllItinerari()

  }

  getListMapSettings(listMapTypes) {
    this.listMapSettingsConfiguration = this.homeTemplateSettingsService.getListMapSettings(listMapTypes);
  }

}
