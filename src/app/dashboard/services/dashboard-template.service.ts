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
    return this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=ujT33dDUsbc')

    while ((match = regex.exec(str)) !== null) {

      // This is necessary to avoid infinite loops with zero-width matches
      if (match.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      return this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=OAou2Klm-n0')
    }

  }
}
