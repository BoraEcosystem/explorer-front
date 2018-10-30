import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  // bora point list
  public get_sp_info(): Observable<any> {
    return this.http.get(environment.api + '/apps')
      .map(res => res);
  }

  // get bp transaction list
  public bp_tx_list(appId: number, page: number, page_size: number): Observable<any> {
    return this.http.get(environment.api + '/points/' + appId + '/txs?page=' + page + '&pageSize=' + page_size)
      .map(res => res);
  }

  // Get bp information for an address such as balance and so on
  public bp_info_addr(appId: number, address: string): Observable<any> {
    return this.http.get(environment.api + '/points/' + appId + '/addresses/' + address)
      .map(res => res);
  }

  // Get bp Transaction list by an address
  public bp_tx_list_by_addr(appId: number, address: string, page: number, page_size: number): Observable<any> {
    return this.http.get(environment.api + '/points/' + appId + '/addresses/' + address + '/txs?page=' + page + '&pageSize=' + page_size)
      .map(res => res);
  }

  // Get bp Transaction by a transaction hash
  public bp_tx_by_txs(appId: number, txs: string): Observable<any> {
    return this.http.get(environment.api + '/points/' + appId + '/txs/' + txs)
      .map(res => res);
  }

  // Get bp Block list
  public bp_block_list(appId: number, page: number, page_size: number): Observable<any> {
    return this.http.get(environment.api + '/points/' + appId + '/blocks?page=' + page + '&pageSize=' + page_size)
      .map(res => res);
  }

  // Get bp Block by block number
  public bp_block_by_bn(appId: number, block_num: string): Observable<any> {
    return this.http.get(environment.api + '/points/' + appId + '/blocks/' + block_num)
      .map(res => res);
  }

  // get br transaction list
  public br_tx_list(page: number, page_size: number): Observable<any> {
    return this.http.get(environment.api + '/tokens?page=' + page + '&pageSize=' + page_size)
      .map(res => res);
  }

  // Get br information for an address such as balance and so on
  public br_info_addr(address: string): Observable<any> {
    return this.http.get(environment.api + '/tokens/addresses/' + address)
      .map(res => res);
  }

  // Get br Transaction list by an address
  public br_tx_list_by_addr(address: string, page: number, page_size: number): Observable<any> {
    return this.http.get(environment.api + '/tokens/addresses/' + address + '/txs?page=' + page + '&pageSize=' + page_size)
      .map(res => res);
  }

  // Get br Transaction by a transaction hash
  public br_tx_by_txs(txs: string): Observable<any> {
    return this.http.get(environment.api + '/tokens/txs/' + txs)
      .map(res => res);
  }

  public br_block_by_bn(block_num: string): Observable<any> {
    return this.http.get(environment.api + '/tokens/blocks/' + block_num)
      .map(res => res);
  }

  public br_block_list(page: number, page_size: number): Observable<any> {
    return this.http.get(environment.api + '/tokens/blocks?page=' + page + '&pageSize=' + page_size)
      .map(res => res);
  }

  public dash_points(): Observable<any> {
    return this.http.get(environment.api + '/dashboard/points')
      .map(res => res);
  }

  public dash_tokens(): Observable<any> {
    return this.http.get(environment.api + '/dashboard/tokens')
      .map(res => res);
  }

  public dash_graph(): Observable<any> {
    return this.http.get(environment.api + '/dashboard/graphs')
      .map(res => res);
  }

  async check_bp_hash(appId: number, hash: string): Promise<any> {
    return await this.http.get(environment.api + '/points/' + appId + '/txs/' + hash).toPromise();
  }

  async check_bp_addr(appId: number, address: string): Promise<any> {
    return await this.http.get(environment.api + '/points/' + appId + '/addresses/' + address).toPromise();
  }

  async check_bp_block(appId: number, block_num: string): Promise<any> {
    return await this.http.get(environment.api + '/points/' + appId + '/blocks/' + block_num).toPromise();
  }
}
