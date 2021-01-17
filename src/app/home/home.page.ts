import { Component, NgZone } from '@angular/core';
import { IBeacon, Beacon } from '@ionic-native/ibeacon/ngx';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  didRangeBeaconsInRegion;
  didStartMonitoringForRegion;
  didEnterRegion;

  beacons: Beacon[] = [];
  zone: any;

  constructor(private ibeacon: IBeacon,
    private toast: Toast,
    private ngZone: NgZone) {

  }

  ionViewDidEnter(): void {


    // Request permission to use location on iOS
    this.ibeacon.requestAlwaysAuthorization();
    // create a new delegate and register it with the native layer
    let delegate = this.ibeacon.Delegate();

    // Subscribe to some of the delegate's event handlers
    delegate.didRangeBeaconsInRegion()
      .subscribe(
        data => {

          this.didRangeBeaconsInRegion = true
          if (data.beacons.length > 0) this.onBeaconConnected(data.beacons);
        },
        error => console.error()
      );

    let beaconRegion = this.ibeacon.BeaconRegion('deskBeacon', '23A01AF0-232A-4518-9C0E-323FB773F5EF');

    this.alert(`Scanning has started`);

    this.ibeacon.startRangingBeaconsInRegion(beaconRegion).then(
      (data) => {
      },
      error => this.alert(`Failed to begin monitoring: ${error}`)
    );

    this.ibeacon.startMonitoringForRegion(beaconRegion)
      .then(
        (data) => {
        },
        error => this.alert(`Failed to begin monitoring: ${error}`)
      );

  }

  /* toast message */
  alert(msg: string) {
    this.toast.show(msg, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }

  onBeaconConnected(beacons: Beacon[]) {
    this.beacons = []
    this.ngZone.run(() => {
      beacons.forEach(beacon => this.beacons.push(beacon))
    });
  }

}
