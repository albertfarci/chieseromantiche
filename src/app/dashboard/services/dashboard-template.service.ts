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

    let match;
    while ((match = regex.exec(str)) !== null) {

      // This is necessary to avoid infinite loops with zero-width matches
      if (match.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      return this.domSanitizer.bypassSecurityTrustResourceUrl(match[1])
    }

  }
}
