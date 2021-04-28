import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LisMapModel, LIST_MAP_CONFIGURATION, ListMapTypes } from '../../models/list-map-settings.model';
import { GeoLocationService } from 'src/app/shared/services/geoLocation.service';

@Component({
  selector: 'app-map-list-tabs',
  templateUrl: './map-list-tabs.component.html',
  styleUrls: ['./map-list-tabs.component.scss'],
})
export class MapListTabsComponent {

  @Input() chieseList;
  @Input() listMapConfiguration: LisMapModel = LIST_MAP_CONFIGURATION.get(ListMapTypes.listVisualization);
  @Output() tabSelected = new EventEmitter<any>();

  constructor(
    public geolocation: GeoLocationService
  ) { }


  emitTabSelected(listMapTypes: ListMapTypes) {
    this.tabSelected.emit(listMapTypes);
  }

  currentPosition() {
    this.geolocation.getLocationCoordinatesSetup()
  }

  get ListMapTypes() {
    return ListMapTypes
  }
}
