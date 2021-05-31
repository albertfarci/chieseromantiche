import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-progetto',
  templateUrl: './progetto.page.html',
  styleUrls: ['./progetto.page.scss'],
})
export class ProgettoPage  {

  
  constructor(
    private translateService: TranslateService) {
}

  getTranslation(value){
    this.translateService.use(sessionStorage.getItem('lang'));
    return this.translateService.instant(value)
  }

}

