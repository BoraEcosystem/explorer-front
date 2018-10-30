import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-brblockinfo',
  templateUrl: './brblockinfo.component.html',
  styleUrls: ['./brblockinfo.component.css']
})
export class BrblockinfoComponent implements OnInit {
  public data: any = {};

  constructor(
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(map => {
      this.api.br_block_by_bn(map.blockNo).take(1).subscribe(
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
