import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-brblock',
  templateUrl: './brblock.component.html',
  styleUrls: ['./brblock.component.css']
})
export class BrblockComponent implements OnInit {
  public br_block_list: any;
  public page: number;
  public page_size: number;
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
      this.pSize = map.pageSize ? map.pageSize : 10;
      this.block_list(map.page, map.pageSize);
    });

  }

  public pageChanged(evt) {
    this.page = evt;
    this.router.navigate(['/bora_block', this.page, this.page_size]);
  }

  public onSelectedSize(evt) {
    this.page_size = evt;
    this.router.navigate(['/bora_block', this.page, this.page_size]);
  }

  private block_list(page: number, pageSize: number) {
    this.api.br_block_list(page, pageSize).take(1).subscribe(
      res => {
        this.br_block_list = res.content;
        this.total = res.totalElements;
        if ( this.br_block_list.length === 0 ) {
          console.log('data empty');
        }
      },
      err => {},
      () => {}
    );
  }

  public block_info(blockNo: string) {
    this.router.navigate(['/bora_block', blockNo]);
  }

}
