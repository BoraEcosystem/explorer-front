import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { I18nService } from './services/i18n.service';
import { ApiService } from './services/api.service';
import { ISpinfo } from './interfaces';
import { fadeAnimation } from './animation';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  public sp_infos: ISpinfo[];
  public selected_sp: number;
  @ViewChild('searchInput') private _search: ElementRef;

  constructor(
    private i18n: I18nService,
    private api: ApiService,
    private router: Router
  ) {
    this.i18n.set();
    this.router.events.filter(e => e instanceof NavigationEnd).pairwise().subscribe(
      (e) => { window.scrollTo(0, 0); }
    );
  }

  ngOnInit() {
    this.get_sp_info();
  }

  private get_sp_info() {
    this.api.get_sp_info().take(1).subscribe(
      res => {
        this.sp_infos = res;
        this.selected_sp = res[0].appId;
      },
      err => {},
      () => {}
    );
  }

  public sp_change(evt) {
    this.selected_sp = evt.target.value;
    this.router.navigate(['/borapoint_block', this.selected_sp, 1, 10]);
  }

  public go_borapoint() {
    if ( this.selected_sp !== undefined ) {
      this.router.navigate(['/borapoint_transaction', this.selected_sp, 1, 10]);
    } else {

    }
  }

  public go_borapoint_blocks() {
    if ( this.selected_sp !== undefined ) {
      this.router.navigate(['/borapoint_block', this.selected_sp, 1, 10]);
    } else {

    }
  }

  public go_account() {
    if ( this.selected_sp !== undefined ) {
      this.router.navigate(['/borapoint_account', this.selected_sp, 1, 10]);
    } else {

    }
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public search() {
    const search_query = this._search.nativeElement.value;
    const numbers = new RegExp(/^[0-9]+$/);
    if ( numbers.test(search_query) ) {
      this.block_search(search_query);
    } else {
      const is_wallet = (search_query.length === 42) ? true : false;
      if ( is_wallet ) {
        this.wallet_search(search_query);
      } else {
        this.hash_search(search_query);
      }
    }
  }

  private hash_search(search_query: string) {
    // for ( const obj of this.sp_infos ) {
    //   await this.api.check_bp_hash(obj.appId, search_query).then(res => {
    //     if ( res !== null ) {
    this.router.navigate(['/borapoint_transaction/', this.selected_sp, search_query]);
    //       return Promise.reject();
    //     }
    //   });
    // }
  }

  private block_search(search_query: string) {
  // for ( const obj of this.sp_infos ) {
  //   await this.api.check_bp_block(obj.appId, search_query).then(res => {
  //     if ( res !== null ) {
    this.router.navigate(['/borapoint_block/', this.selected_sp, search_query]);
  //       return Promise.reject();
  //     }
  //   });
  // }
  }

  private wallet_search(search_query: string) {
    // for ( const obj of this.sp_infos ) {
    //   await this.api.check_bp_addr(obj.appId, search_query).then(res => {
    //     if ( res !== null ) {
      this.router.navigate(['/borapoint_account/', this.selected_sp, search_query, 1, 10]);
    //       return Promise.reject();
    //     }
    //   });
    // }
  }
}
