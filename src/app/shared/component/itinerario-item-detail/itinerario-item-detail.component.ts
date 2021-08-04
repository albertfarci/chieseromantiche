import { Component, Input, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-itinerario-item-detail-component',
  templateUrl: './itinerario-item-detail.component.html',
  styleUrls: ['./itinerario-item-detail.component.scss'],
})
export class ItinerarioItemDetailComponent {

  @Input() chiesa;
  @Input() stop;

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

  constructor() { }


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
