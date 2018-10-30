import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class I18nService {
  public lang: string;

  constructor(
    public translate: TranslateService,
    private cookieService: CookieService
  ) {
    if ( this.cookieService.get('lang') === '' ) {
      const browserLang = this.translate.getBrowserLang();
      this.lang = browserLang.match(/en|ko/) ? browserLang : 'en';
      this.cookieService.set('lang', this.lang);
    } else {
      this.lang = this.cookieService.get('lang');
    }
    this.translate.addLangs(['ko', 'en']);
    // this.translate.setDefaultLang(this.lang);
    this.translate.setDefaultLang('en');
  }

  public set() {
    // this.translate.use(this.cookieService.get('lang'));
    this.translate.use('en');
  }
}
