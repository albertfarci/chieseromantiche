import { Injectable } from '@angular/core';
import { IBeacon } from '@ionic-native/ibeacon/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';

@Injectable({
  providedIn: 'root'
})
export class DashboardBeaconDataService {
  delegate;
  beaconRegion
  constructor(
    private toast: Toast,
    private ibeacon: IBeacon,
    public bluetoothle: BluetoothLE
  ) {
    this.setUpService()
  }

  setUpService() {
    var params = {
      request: true
    };

    this.bluetoothle.initialize(params).subscribe(
      (data) => {


      }
    )

    this.setUpBeacon();

  }

  setUpBeacon() {
    // Request permission to use location on iOS
    this.ibeacon.requestAlwaysAuthorization();
    // create a new delegate and register it with the native layer
    this.delegate = this.ibeacon.Delegate();

    this.beaconRegion = this.ibeacon.BeaconRegion('deskBeacon', '476C6F62-616C-2D54-6167-000000000000');

    this.ibeacon.startRangingBeaconsInRegion(this.beaconRegion).then(
      (data) => {

      },
      error => this.alert(`Failed to begin monitoring: ${error}`)
    );
  }

  didRangeBeaconsInRegion() {
    return this.delegate.didRangeBeaconsInRegion();
  }

  /* toast message */
  alert(msg: string) {
    this.toast.show(msg, '5000', 'center').subscribe(
      toast => {
      }
    );
  }

}
