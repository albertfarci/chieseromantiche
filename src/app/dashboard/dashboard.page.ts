import { Component, NgZone } from '@angular/core';
import { Beacon } from '@ionic-native/ibeacon/ngx';
import { DashboardBeaconDataService } from './services/dashboard-beacon-data.service';
import { Toast } from '@ionic-native/toast/ngx';
import { ChieseRomaneService } from '../shared/services/chiese-romane.service';
import { Subject } from 'rxjs';
import { FirebaseService } from '../shared/services/firebase.service';
import { takeUntil } from 'rxjs/operators';

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

  beaconInterno: Beacon;
  beaconEsterno: Beacon;

  zone: any;
  chieseRomane;
  destroy$: Subject<boolean> = new Subject<boolean>();
  chiesaScanned = [];

  private readonly _start = new Subject<void>();

  constructor(
    private chieseRomaneService: ChieseRomaneService,
    private toast: Toast,
    private ngZone: NgZone,
    private dashboardBeaconDataService: DashboardBeaconDataService,
    private firebaseService: FirebaseService
  ) {

  }

  ionViewDidEnter(): void {


    this.setupScanAction();

  }

  setupScanAction() {

    this.dashboardBeaconDataService.setUpBeacon()

    this.chieseRomaneService.getAllChiese()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        data => {
          this.chieseRomane = data
        },
        error => {
        }
      )
        
    this.dashboardBeaconDataService.didRangeBeaconsInRegion()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        data => {

          this.didRangeBeaconsInRegion = true
          if (data.beacons.length > 0) this.onBeaconConnected(data.beacons);

        },
        error => console.error()
      );

  }

  restartScan() {

    this.beaconEsterno = undefined;
    this.beaconInterno = undefined;
    this.chiesaScanned = [];
    this.setupScanAction()
  }

  getChiesaScanned() {

    if (this.chieseRomane) {
      
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
            (chiesa.beacons[0].major == this.beaconEsterno?.major.toString() &&
              chiesa.beacons[0].minor == this.beaconEsterno?.minor.toString())
            ||
            (chiesa.beacons[1].major == this.beaconInterno?.major.toString() &&
              chiesa.beacons[1].minor == this.beaconInterno?.minor.toString())
        )
    }
  }

  ionViewDidLeave(): void {
    this.stopRangingBeaconsInRegion()

    // this.chieseRomane=[]
    this.chiesaScanned = [];
  }

  stopRangingBeaconsInRegion() {

    this.destroy$.next();
  }

  onBeaconConnected(beacons: Beacon[]) {
    this.ngZone.run(() => {
      beacons.forEach(beacon => {

        if (beacon.rssi < -90 && beacon.minor == 1 && this.beaconEsterno) {

          this.firebaseService.saveExitRegion();
          
        }

        if (beacon.minor == 0 && !this.beaconEsterno) {
          this.beaconEsterno = beacon
          this.firebaseService.saveEntryRegion();
        } else if (beacon.minor == 1 && !this.beaconInterno){
          this.beaconInterno = beacon
        }

        if (this.beaconEsterno && this.beaconInterno) {
          this.stopRangingBeaconsInRegion()
        }

        this.getChiesaScanned();

      })
    });
  }

  /* toast message */
  alert(msg: string) {
    this.toast.show(msg, '5000', 'center').subscribe(
      toast => {
      }
    );
  }
}
