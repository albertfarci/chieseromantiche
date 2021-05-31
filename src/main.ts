import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Globalization } from '@ionic-native/globalization/ngx';

if (environment.production) {
  enableProdMode();
}

(async () => {

  const globalization = new Globalization()

  globalization.getPreferredLanguage()
    .then(lang => {
      console.log(lang)
      sessionStorage.setItem('lang', lang.value.split('-')[0].toLowerCase())
    })
    .catch(e => {
      sessionStorage.setItem('lang', 'en')
    });


  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
})();
