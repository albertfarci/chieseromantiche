import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LisMapModel, LIST_MAP_CONFIGURATION, ListMapTypes } from '../../models/list-map-settings.model';

@Component({
  selector: 'app-map-list-tabs',
  templateUrl: './map-list-tabs.component.html',
  styleUrls: ['./map-list-tabs.component.scss'],
})
export class MapListTabsComponent implements OnInit {

  @Input() chieseList;
  @Input() listMapConfiguration: LisMapModel = LIST_MAP_CONFIGURATION.get(ListMapTypes.listVisualization);
  @Output() tabSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  emitTabSelected(listMapTypes: ListMapTypes) {
    this.tabSelected.emit(listMapTypes);
  }

  get ListMapTypes() {
    return ListMapTypes
  }
}
