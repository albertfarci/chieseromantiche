import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device/ngx'
import { AngularFirestore } from '@angular/fire/firestore';
import { Toast } from '@ionic-native/toast/ngx';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore,
    private toast: Toast,
    private device: Device
  ) { }

  saveEntryRegion() {

    this.firestore.collection('/regions')
      .add({
        uuid: this.device.uuid,
        entryRegion: new Date()
      })
      .then(
        () => {

          this.alert("Region saved")
        }
      )
  }

  saveExitRegion() {

    this.firestore.collection('/regions')
      .add({
        uuid: this.device.uuid,
        exitRegion: new Date()
      })
      .then(
        () => {

          this.alert("Region saved")
        }
      )
  }


  /* toast message */
  alert(msg: string) {
    this.toast.show(msg, '5000', 'center').subscribe(
      toast => {
      }
    );
  }
}
