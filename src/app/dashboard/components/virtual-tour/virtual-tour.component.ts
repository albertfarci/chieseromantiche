import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx';
@Component({
  selector: 'app-virtual-tour',
  templateUrl: './virtual-tour.component.html',
  styleUrls: ['./virtual-tour.component.scss'],
})
export class VirtualTourComponent implements OnChanges {

  @Input() chieseRomane;
  @Input() beaconInterno;
  @Input() beaconEsterno;
  @Input() virtualTour: boolean = true;
  @Output() stopRangingBeaconsInRegion = new EventEmitter<string>();

  chiesaScanned = []
  constructor(
    private toast: Toast) { }

  ngOnChanges() {

    if (this.chieseRomane) {

      if (this.beaconInterno && this.beaconEsterno) {
        this.stopRangingBeaconsInRegion.emit()
      }

      this.chiesaScanned = this.chieseRomane
        .map(
          chiesa => {
            return {
              id: chiesa.id,
              narrazione: chiesa.narrazione,
              virtual_tour: chiesa.virtual_tour,
              audio: chiesa.audio,
              pmdb_galleria_foto: chiesa.pmdb_galleria_foto,
              pmdb_location_address: chiesa.pmdb_location_address,
              pmdb_location_city: chiesa.pmdb_location_city,
              title: {
                rendered: chiesa.title.rendered
              },
              beacons: [
                {
                  uuid: chiesa.uuid,
                  major: chiesa.major,
                  minor: chiesa.minor
                },
                {
                  uuid: chiesa.uuid2,
                  major: chiesa.major2,
                  minor: chiesa.minor2
                }
              ]
            }
          }
        ).filter(
          chiesa =>
            (chiesa.beacons[0].uuid == this.beaconInterno?.uuid &&
              chiesa.beacons[0].major == this.beaconInterno?.major.toString() &&
              chiesa.beacons[0].minor == this.beaconInterno?.minor.toString())
            ||
            (chiesa.beacons[1].uuid == this.beaconEsterno?.uuid &&
              chiesa.beacons[1].major == this.beaconEsterno?.major.toString() &&
              chiesa.beacons[1].minor == this.beaconEsterno?.minor.toString())
        )
    }
  }

  /* toast message */
  alert(msg: string) {
    this.toast.show(msg, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }
}
