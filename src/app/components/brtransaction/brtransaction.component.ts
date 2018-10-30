import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-brtransaction',
  templateUrl: './brtransaction.component.html',
  styleUrls: ['./brtransaction.component.css']
})
export class BrtransactionComponent implements OnInit {

  public br_tx_list: any;
  public page: number;
  public page_size: number;
  public total: number;
  public pSize: number;

  constructor(
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(map => {
      this.page = map.page;
      this.page_size = map.pageSize;
      this.pSize = map.pageSize ? map.pageSize : 10;
      this.tx_list(map.page, map.pageSize);
    });
  }

  public pageChanged(evt) {
    this.page = evt;
    this.router.navigate(['/bora_transaction', this.page, this.page_size]);
  }

  public onSelectedSize(evt) {
    this.page_size = evt;
    this.router.navigate(['/bora_transaction', this.page, this.page_size]);
  }

  private tx_list(page: number, pageSize: number) {
    this.api.br_tx_list(page, pageSize).take(1).subscribe(
      res => {
        this.br_tx_list = res.content;
        this.total = res.totalElements;
        if ( this.br_tx_list.length === 0 ) {
          console.log('data empty');
        }
      },
      err => {},
      () => {}
    );
  }

  public transaction_info(hash: string) {
    this.router.navigate(['/bora_transaction/', hash]);
  }

  public block_info(blockNo: string) {
    this.router.navigate(['/bora_block', blockNo]);
  }

  public addr_info(addr: string) {
    this.router.navigate(['/bora_account', addr, 1, 10]);
  }

}
