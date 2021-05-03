import { Component, OnInit, NgZone } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.page.html',
  styleUrls: ['./preferiti.page.scss'],
})
export class PreferitiPage {

  chieseRomaneFiltered = []

  constructor(
    private toast: Toast,
    private ngZone: NgZone,
    private nativeStorage: NativeStorage) { }

  ionViewDidEnter() {


    this.nativeStorage.keys()
      .then(
        data => this.dataRetrived(data),
        error => console.error(error)
      );
  }

  dataRetrived = (data) => {

    this.chieseRomaneFiltered = []
    this.ngZone.run(() => {
      data.map(
        chiesaId => {
          this.nativeStorage.getItem(chiesaId)
            .then(
              data => {
                this.chieseRomaneFiltered.push(data)
              },
              error => console.error(error)
            );
        }
      )
    });
  };

  /* toast message */
  alert(msg) {
    this.toast.show(msg, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }

}
