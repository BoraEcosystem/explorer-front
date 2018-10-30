import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-bpblock',
  templateUrl: './bpblock.component.html',
  styleUrls: ['./bpblock.component.css']
})
export class BpblockComponent implements OnInit {
  public bp_block_list: any;
  public page: number;
  public page_size: number;
  public appId: string;
  public appName: string;
  public total: number;
  public pSize: number;

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
      this.block_list(map.appId, map.page, map.pageSize);

      this.api.get_sp_info().take(1).subscribe(
          res => {
            this.appName = res.filter(item => item.appId === this.appId)[0].appName;
          },
          err => {},
          () => {}
        );
    });

  }

  public pageChanged(evt) {
    this.page = evt;
    this.router.navigate(['/borapoint_block', this.appId, this.page, this.page_size]);
  }

  public onSelectedSize(evt) {
    this.page_size = evt;
    this.router.navigate(['/borapoint_block', this.appId, this.page, this.page_size]);
  }

  private block_list(appId: number, page: number, pageSize: number) {
    // page(1), pageSize(10)
    this.api.bp_block_list(appId, page, pageSize).take(1).subscribe(
      res => {
        this.bp_block_list = res.content;
        this.total = res.totalElements;
        if ( this.bp_block_list.length === 0 ) {
          console.log('data empty');
        }
      },
      err => {},
      () => {}
    );
  }

  public block_info(appId: number, blockNo: string) {
    this.router.navigate(['/borapoint_block', appId, blockNo]);
  }
}
