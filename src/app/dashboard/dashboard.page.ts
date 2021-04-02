import { Component, NgZone } from '@angular/core';
import { Beacon } from '@ionic-native/ibeacon/ngx';
import { DashboardBeaconDataService } from './services/dashboard-beacon-data.service';
import { Toast } from '@ionic-native/toast/ngx';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

  didRangeBeaconsInRegion;
  didStartMonitoringForRegion;
  didEnterRegion;

  beacons: Beacon[] = [];
  zone: any;

  constructor(
    private toast: Toast,
    private ngZone: NgZone,
    private dashboardBeaconDataService: DashboardBeaconDataService
  ) { }

  ionViewDidEnter(): void {
    this.dashboardBeaconDataService.startRangingBeaconsInRegion();

    this.dashboardBeaconDataService.didRangeBeaconsInRegion()
      .subscribe(
        data => {

          this.alert(JSON.stringify(data))

          this.didRangeBeaconsInRegion = true
          if (data.beacons.length > 0) this.onBeaconConnected(data.beacons);

        },
        error => console.error()
      );
  }

  onBeaconConnected(beacons: Beacon[]) {
    this.beacons = []
    this.ngZone.run(() => {
      beacons.forEach(beacon => this.beacons.push(beacon))
    });
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
