import { Component, Input, NgZone, OnChanges } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DashboardTemplateService } from 'src/app/dashboard/services/dashboard-template.service';
import { SLIDES_OPTIONS_CONFIGURATIONS } from '../../models/slideoptions.model';
@Component({
  selector: 'app-chiesa-detail-component',
  templateUrl: './chiesa-detail.component.html',
  styleUrls: ['./chiesa-detail.component.scss'],
})
export class ChiesaDetailComponent implements OnChanges {

  @Input() chiesa;
  @Input() virtualTour: boolean = false;
  @Input() showIframe: boolean = true;
  @Input() interno: boolean = false;
  @Input() esterno: boolean = false;

  isPrefferedYet: boolean = false;

  slideOpts = SLIDES_OPTIONS_CONFIGURATIONS.get('photo-gallery')

  constructor(
    private toast: Toast,
    private nativeStorage: NativeStorage,
    public dashboardTemplateService: DashboardTemplateService) { }


  ngOnChanges() {

    if (this.chiesa) {
      this.nativeStorage.getItem(this.chiesa[0].id)
        .then(
          data => {
            this.isPrefferedYet = true;
          },
          error => console.error(error)
        );
    }
  }

  addToPreferiti() {
    this.nativeStorage.setItem(JSON.stringify(this.chiesa[0].id), this.chiesa[0])
      .then(
        () => this.alert('Stored item!'),
        error => console.error('Error storing item', error)
      );

  }

  openMaps() {
    var url = '';

    //this will be used for browsers if we ever want to convert to a website
    url = "http://maps.google.com?q=" + this.chiesa[0].pmdb_metabox_latitude + "," + this.chiesa[0].pmdb_metabox_longitude;

    window.open(url, "_system", 'location=no');
  }

  /* toast message */
  alert(msg) {
    this.toast.show(msg, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }

}
