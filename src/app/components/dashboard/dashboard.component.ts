import { Component, OnInit, OnDestroy } from '@angular/core';
import { IPoints, ITokens, ISpinfo } from '../../interfaces';
import { ApiService } from '../../services/api.service';
import { Web3Service } from '../../services/web3.service';
import * as $ from 'jquery';
import { appendNgContent } from '@angular/core/src/view/ng_content';
// import { MomentModule } from 'ngx-monent';
import * as moment from 'moment';


declare var Morris: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public points: IPoints[] = [] as any;
  public tokens: ITokens = {} as any;
  public sp_infos: ISpinfo[] = [] as any;

  private graph_data: any;
  private interval_id: any;
  private graph_interval: any;
  private block_time: number = 3000 as number;

  constructor(
    private api: ApiService,
    private web3: Web3Service,
  ) { }

  ngOnInit() {
    this.graph_data = { data: [] };

    this.dashboard_data();
    this.api.dash_graph().take(1).subscribe(
      res => {
        this.graph(res);
      },
      err => {},
      () => {}
    );

    this.interval_id = setInterval(() => {
      this.dashboard_data();
    }, this.block_time);

    this.graph_interval = setInterval(() => {
      this.api.dash_graph().take(1).subscribe(
        res => {
          this.graph(res);
        }
      );
    }, this.block_time);

  }

  private graph(data: any) {
    $('#morris-area-chart').empty();
    const color1 = '#594ee0',
      color2 = '#9eabb5',
      color3 = '#8cbef1';

    Morris.Area({
      element: 'morris-area-chart',
      data: data.data,
      xkey: data.xkey,
      ykeys: data.ykeys,
      labels: data.labels,
      parseTime: false,
      pointSize: 2,
      hideHover: 'auto',
      resize: true,
      lineColors: [color1, color2, color3]
    });
  }

  private dashboard_data() {
    this.api.dash_points().take(1).subscribe(
      res => { this.points = res; },
      err => {},
      () => {}
    );

    this.api.dash_tokens().take(1).subscribe(
      res => { this.tokens = res; },
      err => {},
      () => {}
    );
  }

  private get_block_tps() {

  }

  ngOnDestroy(): void {
    if ( this.interval_id ) {
      clearInterval(this.interval_id);
      clearInterval(this.graph_interval);
    }
  }
}
