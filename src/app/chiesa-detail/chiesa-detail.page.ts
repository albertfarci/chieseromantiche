import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChieseRomaneService } from '../shared/services/chiese-romane.service';
import { map } from 'rxjs/operators';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-chiesa-detail',
  templateUrl: './chiesa-detail.page.html',
  styleUrls: ['./chiesa-detail.page.scss'],
})
export class ChiesaDetailPage {

  chiesa
  showIframe: boolean = true;
  isPrefferedYet: boolean = false
  databaseObj: SQLiteObject;
  row_data: any = [];
  readonly database_name: string = "items.db";
  readonly table_name: string = "chiesa";

  constructor(
    private activeRoute: ActivatedRoute,
    private sqlite: SQLite,
    private chieseRomaneService: ChieseRomaneService
  ) { }

  ionViewDidEnter() {
    const id = this.activeRoute.snapshot.paramMap.get('id');

    this.chiesa = this.chieseRomaneService.getChiesaById(id)


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

        if (res.rows.length > 0) {

          for (var i = 0; i < res.rows.length; i++) {
            if (res.rows.item(i).chiesa == id) {

              this.isPrefferedYet= true
            }
          }
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

  ionViewWillEnter() {
    this.showIframe = true
  }

  ionViewDidLeave() {
    this.showIframe = false
  }
}
