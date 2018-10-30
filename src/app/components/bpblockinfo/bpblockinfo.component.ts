import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-bpblockinfo',
  templateUrl: './bpblockinfo.component.html',
  styleUrls: ['./bpblockinfo.component.css']
})
export class BpblockinfoComponent implements OnInit {
  public data: any = {};
  private appId: number;

  constructor(
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(map => {
      this.api.bp_block_by_bn(map.appId, map.blockNo).take(1).subscribe(
        res => {
          this.data = res;
          this.appId = map.appId;
        },
        err => {
          this.data = null;
        },
        () => {}
      );
    });
  }

  public addr_info(addr: string) {
    this.router.navigate(['/borapoint_account', this.appId, addr, 1, 10]);
  }
}
