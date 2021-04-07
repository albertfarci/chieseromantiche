import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Toast } from '@ionic-native/toast/ngx';

@Pipe({ name: 'translatePipe' })
export class TranslatePipe implements PipeTransform {

    localLanguage = 'it';

    constructor(
        private toast: Toast,
        private translateService: TranslateService) {
    }

    transform(value: string): string {

        this.alert(this.translateService.currentLang)

        return this.translateService.instant(value);
    }

    /* toast message */
    alert(msg) {
        this.toast.show(msg, '5000', 'center').subscribe(
            toast => {
                console.log(toast);
            }
        );
    }
}