import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-bpaccount',
  templateUrl: './bpaccount.component.html',
  styleUrls: ['./bpaccount.component.css']
})
export class BpaccountComponent implements OnInit {

  public addr_info: any = {};
  public bp_addr_list: any = {};
  public page: number;
  public addr: string;
  public page_size: number;
  public appId: number;
  public appName: string;
  public total: number;
  public pSize: number;
  public data_len: Number = 0;
  public user_address: string;

  constructor(
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(map => {
      this.page = map.page;
      this.page_size = map.pageSize;
      this.appId = map.appId;
      this.pSize = map.pageSize ? map.pageSize : 10;
      this.addr = map.addr;
      if ( map.addr !== undefined ) {
        this.user_address = map.addr;
        this.api.bp_info_addr(this.appId, this.addr).take(1).subscribe(
          res => { this.addr_info = res; },
          err => {},
          () => {}
        );

        this.addr_list(this.appId, this.user_address, this.page, this.page_size);
      }
    });
  }

  public get_address_info() {
    const addr = $.trim(this.user_address);
    if ( addr === '' ) {
      this.router.navigate(['/borapoint_account', this.appId, 1, 10]);
    } else {
      this.router.navigate(['/borapoint_account', this.appId, addr, 1, 10]);
    }
  }

  public pageChanged(evt) {
    this.page = evt;
    console.log(this.addr);
    this.router.navigate(['/borapoint_account', this.appId, this.addr, this.page, this.page_size]);
  }

  public onSelectedSize(evt) {
    this.page_size = evt;
    this.router.navigate(['/borapoint_account', this.appId, this.addr, this.page, this.page_size]);
  }

  private addr_list(appId: number, addr: string,  page: number, pageSize: number) {
    this.api.bp_tx_list_by_addr(appId, addr, page, pageSize).take(1).subscribe(
      res => {
        this.bp_addr_list = res.content;
        this.total = res.totalElements;
        this.data_len = Object.keys(this.bp_addr_list).length;
        if ( this.bp_addr_list.length === 0 ) {
          console.log('data empty');
        }
      },
      err => {},
      () => {}
    );
  }

  public transaction_info(appId: number, hash: string) {
    this.router.navigate(['/borapoint_transaction', appId, hash]);
  }

  public block_info(appId: number, blockNo: string) {
    this.router.navigate(['/borapoint_block', appId, blockNo]);
  }

  public addr_to_info(appId: number, addr: string) {
    this.router.navigate(['/borapoint_account', appId, addr, 1, 10]);
  }
}
