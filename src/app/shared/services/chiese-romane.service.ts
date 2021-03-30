import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChieseRomaneService {

  constructor(private httpClient: HttpClient) { }

  getAllChiese(): Observable<any> {
    return this.httpClient.get("/assets/chieseRomane.json");
  }

  getChiesaById(id): Observable<any> {
    return this.getAllChiese()
      .pipe(
        map(result =>
          result.filter(one => one.id == id)
        )
      )
  }

}
