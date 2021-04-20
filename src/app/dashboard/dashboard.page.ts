import { Component, NgZone } from '@angular/core';
import { Beacon } from '@ionic-native/ibeacon/ngx';
import { DashboardBeaconDataService } from './services/dashboard-beacon-data.service';
import { Toast } from '@ionic-native/toast/ngx';
import { ChieseRomaneService } from '../shared/services/chiese-romane.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FirebaseService } from '../shared/services/firebase.service';

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

  beaconInterno;
  beaconEsterno;

  zone: any;
  chieseRomane;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private chieseRomaneService: ChieseRomaneService,
    private toast: Toast,
    private ngZone: NgZone,
    private dashboardBeaconDataService: DashboardBeaconDataService,
    private firebaseService: FirebaseService
  ) { }

  ionViewDidEnter(): void {

    this.dashboardBeaconDataService.setUpBeacon()

    this.chieseRomane = this.chieseRomaneService.getAllChiese()

    this.dashboardBeaconDataService.didRangeBeaconsInRegion()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        data => {

          this.didRangeBeaconsInRegion = true
          if (data.beacons.length > 0) this.onBeaconConnected(data.beacons);

        },
        error => console.error()
      );

  }

  ionViewDidLeave(): void {
    this.stopRangingBeaconsInRegion()
  }

  stopRangingBeaconsInRegion() {
    this.alert('stopRangingBeaconsInRegion ')
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onBeaconConnected(beacons: Beacon[]) {
    this.ngZone.run(() => {
      beacons.forEach(beacon => {

        if (beacon.rssi < -90 && beacon.minor == 1 && this.beaconEsterno) {

          this.firebaseService.saveExitRegion();
          this.beaconEsterno = this.beaconInterno
          return;
        }

        if (beacon.rssi >= -90 && beacon.minor == 1) {
          this.beaconEsterno = this.beaconInterno
          return;
        }

        if (beacon.minor == 0 && !this.beaconInterno) {
          this.beaconInterno = beacon
          this.firebaseService.saveEntryRegion();
        }

      })
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
