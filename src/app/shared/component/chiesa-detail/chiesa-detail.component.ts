import { Component, Input, NgZone, OnChanges } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DashboardTemplateService } from 'src/app/dashboard/services/dashboard-template.service';
import { SLIDES_OPTIONS_CONFIGURATIONS } from '../../models/slideoptions.model';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-chiesa-detail-component',
  templateUrl: './chiesa-detail.component.html',
  styleUrls: ['./chiesa-detail.component.scss'],
})
export class ChiesaDetailComponent {

  @Input() chiesa;
  @Input() virtualTour: boolean = false;
  @Input() showIframe: boolean = true;
  @Input() interno: boolean = false;
  @Input() esterno: boolean = false;
  @Input() isPrefferedYet: boolean = false;

  slideOpts = SLIDES_OPTIONS_CONFIGURATIONS.get('photo-gallery')

  
  constructor(
    private storage: StorageService,
    private socialSharing: SocialSharing,
    private toast: Toast,
    public dashboardTemplateService: DashboardTemplateService) { }

  

  addToPreferiti() {

    this.storage.insertRow(this.chiesa[0])

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

  ShareGeneric(parameter) {
    const url = this.chiesa[0].link
    const text = this.chiesa[0]?.title.rendered + '\n'
    this.socialSharing.share(text, 'MEDIUM', null, url)
  }

  ShareWhatsapp() {
    this.socialSharing.shareViaWhatsApp(this.chiesa[0]?.title.rendered, this.chiesa[0]?.pmdb_galleria_foto[0], this.chiesa[0].link)
  }

  ShareFacebook() {
    this.socialSharing.shareViaWhatsApp(this.chiesa[0]?.title.rendered, this.chiesa[0]?.pmdb_galleria_foto[0], this.chiesa[0].link)
  }

  SendEmail() {
    this.socialSharing.shareViaEmail('text', 'subject', ['email@address.com'])
  }
}
