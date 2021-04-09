import { Component, Input, OnChanges } from '@angular/core';
import { Map, LayerGroup } from 'leaflet';
import L from 'leaflet'
import { LisMapModel, ListMapTypes, LIST_MAP_CONFIGURATION } from 'src/app/home/models/list-map-settings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnChanges {

  @Input() chieseList;
  @Input() listMapConfiguration: LisMapModel = LIST_MAP_CONFIGURATION.get(ListMapTypes.mapVisualization);

  private map: Map
  private layerGroup

  constructor(
    public router: Router) { }

  ngOnChanges() {

    if (this.listMapConfiguration?.mapVisible && !!this.map == false) {

      this.map = new L.map('map-page').setView([39.21834898953833, 9.1126227435], 8);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

      setTimeout(() => { this.map.invalidateSize() }, 1000);

      this.layerGroup = new LayerGroup();

      this.layerGroup.addTo(this.map);

      this.chieseList?.map(
        chiesa => {

          if (this.chieseList?.length == 1) {
            this.map.setView([chiesa.pmdb_metabox_latitude, chiesa.pmdb_metabox_longitude], 8);

          }

          L.marker([chiesa.pmdb_metabox_latitude, chiesa.pmdb_metabox_longitude])
            .on('click', (x => {
              this.router.navigate(['/tablinks/chiesa-detail/' + chiesa.id]);
            }))
            .addTo(this.map).openPopup()
        }
      )


    }

  }

}
