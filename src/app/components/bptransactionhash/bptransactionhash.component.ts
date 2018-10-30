import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-bptransactionhash',
  templateUrl: './bptransactionhash.component.html',
  styleUrls: ['./bptransactionhash.component.css']
})
export class BptransactionhashComponent implements OnInit {
  public data: any = {};
  private appId: number;

  constructor(
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(map => {
      this.api.bp_tx_by_txs(map.appId, map.hash).take(1).subscribe(
        res => {
          this.data = res;
          this.appId = map.appId;
        },
        err => {},
        () => {}
      );
    });
  }

  public addr_info(addr: string) {
    this.router.navigate(['/borapoint_account', this.appId, addr, 1, 10]);
  }
}
