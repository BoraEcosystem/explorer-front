import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-brtransactionhash',
  templateUrl: './brtransactionhash.component.html',
  styleUrls: ['./brtransactionhash.component.css']
})
export class BrtransactionhashComponent implements OnInit {

  public data: any = {};

  constructor(
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(map => {
      this.api.br_tx_by_txs(map.hash).take(1).subscribe(
        res => { this.data = res; },
        err => {},
        () => {}
      );
    });
  }

  public addr_info(addr: string) {
    this.router.navigate(['/bora_address', addr, 1, 10]);
  }
}
