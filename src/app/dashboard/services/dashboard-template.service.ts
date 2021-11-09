import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DashboardTemplateService {

  constructor(
    private domSanitizer: DomSanitizer
  ) { }


  iframeSanitize(chiesa) {
    const regex = /src=\"([^"]*)\"/gm;
    const escaped = chiesa.virtual_tour;

    const str = unescape(escaped)

    console.log(chiesa)

    let match;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(chiesa.video);

  }
}
