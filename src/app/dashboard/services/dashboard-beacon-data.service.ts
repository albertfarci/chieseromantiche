import { Injectable } from '@angular/core';
import { IBeacon } from '@ionic-native/ibeacon/ngx';
import { Toast } from '@ionic-native/toast/ngx';

@Injectable({
  providedIn: 'root'
})
export class DashboardBeaconDataService {
  delegate;
  beaconRegion
  constructor(
    private toast: Toast,
    private ibeacon: IBeacon
  ) {
    this.setUpService();
  }

  setUpService() {
    // Request permission to use location on iOS
    this.ibeacon.requestAlwaysAuthorization();
    // create a new delegate and register it with the native layer
    this.delegate = this.ibeacon.Delegate();

    this.beaconRegion = this.ibeacon.BeaconRegion('deskBeacon', '476C6F62-616C-2D54-6167-000000000000');

    this.alert(`Scanning has started`);


    this.ibeacon.startRangingBeaconsInRegion(this.beaconRegion).then(
      (data) => {
      },
      error => this.alert(`Failed to begin monitoring: ${error}`)
    );
  }

  didRangeBeaconsInRegion() {
    // Subscribe to some of the delegate's event handlers
    this.alert(JSON.stringify(this.delegate))
    return this.delegate.didRangeBeaconsInRegion();
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
