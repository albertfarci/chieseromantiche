import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { TranslationModels } from '../models/translation-model';

@Injectable({
  providedIn: 'root'
})
export class ChieseRomaneService {

  constructor(
    private httpClient: HttpClient,
    private translateService: TranslateService
  ) { }

  getAllChiese(): Observable<any> {
    console.log(TranslationModels[this.translateService.currentLang])

    return this.httpClient.get("https://www.chieseromanichesardegna.it/wp-json/wp/v2/posts?status=publish&per_page=100");
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
