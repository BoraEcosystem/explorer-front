import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MomentModule } from 'ngx-moment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Interceptor } from './services/interceptor.service';

// Services
import { I18nService } from './services/i18n.service';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './services/api.service';
import { Web3Service } from './services/web3.service';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrtransactionComponent } from './components/brtransaction/brtransaction.component';
import { BptransactionComponent } from './components/bptransaction/bptransaction.component';
import { BpblockComponent } from './components/bpblock/bpblock.component';
import { BrblockComponent } from './components/brblock/brblock.component';
import { BrtransactionhashComponent } from './components/brtransactionhash/brtransactionhash.component';
import { BptransactionhashComponent } from './components/bptransactionhash/bptransactionhash.component';
import { BpblockinfoComponent } from './components/bpblockinfo/bpblockinfo.component';
import { BrblockinfoComponent } from './components/brblockinfo/brblockinfo.component';
import { BpaccountComponent } from './components/bpaccount/bpaccount.component';
import { BraccountComponent } from './components/braccount/braccount.component';
import { SettingsComponent } from './components/settings/settings.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    DashboardComponent,
    BrtransactionComponent,
    BptransactionComponent,
    BpblockComponent,
    BrblockComponent,
    BrtransactionhashComponent,
    BptransactionhashComponent,
    BpblockinfoComponent,
    BrblockinfoComponent,
    BpaccountComponent,
    BraccountComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxPaginationModule,
    MomentModule
  ],
  providers: [
    CookieService,
    I18nService,
    ApiService,
    Web3Service,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
