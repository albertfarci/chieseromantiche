import { Component, OnInit, NgZone } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { StorageService } from '../shared/services/storage.service';
import { ChieseRomaneService } from '../shared/services/chiese-romane.service';
@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.page.html',
  styleUrls: ['./preferiti.page.scss'],
})
export class PreferitiPage {

  chieseRomaneFiltered = []

  databaseObj: SQLiteObject;
  row_data: any = [];
  readonly database_name: string = "items.db";
  readonly table_name: string = "chiesa";

  constructor(
    private chieseRomaneService: ChieseRomaneService,
    private sqlite: SQLite,
    private toast: Toast) 
    { }

  ionViewDidEnter() {
    
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.databaseObj = db;
        this.databaseObj.executeSql(`
      CREATE TABLE IF NOT EXISTS ${this.table_name}  (pid INTEGER PRIMARY KEY, chiesa INTEGER)
      `, [])
        .then(() => {
          this.databaseObj.executeSql(`
    SELECT * FROM ${this.table_name}
    `
      , [])
      .then((res) => {

        this.row_data = [];
        if (res.rows.length > 0) {

          this.dataRetrived(res.rows);
          
        }
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
        })
        .catch(e => {
          alert("error " + JSON.stringify(e))
        });
  }

  dataRetrived = (data) => {
    this.chieseRomaneFiltered=[]

    for (var i = 0; i < data.length; i++) {

      this.chieseRomaneService.getChiesaById(data.item(i).chiesa).subscribe(
        data => {
          this.chieseRomaneFiltered.push(data[0])
        }
      )
    }
  };

  /* toast message */
  alert(msg) {
    this.toast.show(msg, '5000', 'center').subscribe(
      toast => {
      }
    );
  }

}
