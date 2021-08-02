import { Component, Input, NgZone, OnChanges, ViewChild } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DashboardTemplateService } from 'src/app/dashboard/services/dashboard-template.service';
import { SLIDES_OPTIONS_CONFIGURATIONS } from '../../models/slideoptions.model';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { StorageService } from '../../services/storage.service';
import { IonRange } from '@ionic/angular';
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

  // ...
@ViewChild("range", { static: false }) range: IonRange;

// ...
media: any;

// ...
audioPlayer = null;
audioDuration = null;
audioProgress = null;
audioTimer = null;
audioIsPaused = false;
nowPlayingAudioIndex = null;
  
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


playPlauseAudio(index: number, file: string) {
  if (index === this.nowPlayingAudioIndex) {
    // update current player
    if (this.audioIsPaused) {
      // resume
      this.audioIsPaused = false;
      if (this.audioPlayer) this.audioPlayer.play();
    } else {
      // pause
      this.audioIsPaused = true;
      if (this.audioPlayer) this.audioPlayer.pause();
    }
  } else {
    if (this.audioPlayer) {
      // stop any existing audio
      this.destroyAudio();
    }
    // create and play new track
    this.nowPlayingAudioIndex = index;
    this.audioIsPaused = false;
    this.audioPlayer = new Audio(file);
    this.audioPlayer.play().then(() => {
      this.audioDuration = this.audioPlayer.duration;
      this.audioTimer = setInterval(() => {
        this.audioProgress = this.audioPlayer.currentTime;
        this.audioPlayer.onended = () => {
          this.destroyAudio();
        };
      }, 100);
    });
  }
}

seek(index: number, event: any) {
  if (index == this.nowPlayingAudioIndex) {
    let seekTo = event.target.value;
    this.audioPlayer.currentTime = seekTo;
    if (this.audioIsPaused == true) {
      this.audioPlayer.play();
      this.audioIsPaused = false;
    }
  }
}

pauseWhileSeeking(index: number) {
  if (index == this.nowPlayingAudioIndex) {
    this.audioIsPaused = true;
    this.audioPlayer.pause();
  }
}

getAudioProgress(seconds: number) {
  if (seconds >= 0) {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
  }
}

destroyAudio() {
  if (this.audioPlayer && !this.audioIsPaused) this.audioPlayer.pause();
  if (this.audioTimer) clearInterval(this.audioTimer);
  if (this.range) this.range.value = 0;
  this.audioPlayer = null;
  this.audioDuration = null;
  this.audioProgress = null;
  this.audioTimer = null;
  this.audioIsPaused = false;
  this.nowPlayingAudioIndex = null;
}
}
