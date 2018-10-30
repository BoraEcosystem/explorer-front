import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ISpinfo } from '../../interfaces';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public data: ISpinfo[];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.get_sp_info().take(1).subscribe(
      res => { this.data = res; },
      err => {},
      () => {}
    );
  }

}
