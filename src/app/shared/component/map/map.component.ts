import { Component, Input, OnChanges } from '@angular/core';
import { Map, icon, LayerGroup } from 'leaflet';
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
  @Input() currentPosition;

  private map: Map
  private layerGroup

  icons = {
    shadowPC: icon({
      iconUrl: '/assets/icon/Ellipse25.svg',
      iconSize: [50, 50],
      popupAnchor: [0, -20]
    }),
    pointPC: icon({
      iconUrl: '/assets/icon/posizioneCorrente.svg',
      iconSize: [50, 50],
      popupAnchor: [0, -20]
    })
  }

  constructor(
    public router: Router) { }

  ngOnChanges() {

    if (this.listMapConfiguration?.mapVisible && !!this.map == false) {

      this.map = new L.map('map-page').setView([39.21834898953833, 9.1126227435], 8);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

      setTimeout(() => { this.map.invalidateSize() }, 1000);

      this.layerGroup = new LayerGroup();

      this.layerGroup.addTo(this.map);




    }

    if (!!this.map) {

      for (const property in this.map._layers) {
        if (this.map._layers[property].options && this.map._layers[property].options.title) {
          if (this.map._layers[property].options.title == "chiesa") {
            this.map.removeLayer(this.map._layers[property])
          }
        }
      }

      if (this.currentPosition) {

        L.marker([this.currentPosition.latitudine, this.currentPosition.longitudine], { title: "PC", icon: this.icons.pointPC }).addTo(this.map)
        L.marker([this.currentPosition.latitudine, this.currentPosition.longitudine], { title: "Shadow", icon: this.icons.shadowPC }).addTo(this.map)
      }

      this.chieseList?.map(
        chiesa => {

          if (this.chieseList?.length == 1) {
            this.map.setView([chiesa.pmdb_metabox_latitude, chiesa.pmdb_metabox_longitude], 8);

          }

          L.marker([chiesa.pmdb_metabox_latitude, chiesa.pmdb_metabox_longitude], { title: "chiesa" })
            .on('click', (x => {
              this.router.navigate(['/tablinks/chiesa-detail/' + chiesa.id]);
            }))
            .addTo(this.map).openPopup()
        }
      )
    }


  }

}
