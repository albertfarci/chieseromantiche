import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  databaseObj: SQLiteObject;
  row_data: any = [];
  readonly database_name: string = "items.db";
  readonly table_name: string = "chiesa";


  constructor(
    private sqlite: SQLite) { }

  //Inset row in the table
  insertRow(chiesa) {

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
          INSERT INTO ${this.table_name} (chiesa) VALUES ('${chiesa.id}')
        `, [])
          .then(() => {
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
  
}
