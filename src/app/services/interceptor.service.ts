import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Interceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let header_data;
    // obtain GET
    // header_data = {'Content-Type' : 'application/json'};
    header_data = {'Accept' : 'application/json'};

    const dupReq = req.clone({
      // withCredentials: true,
      headers: new HttpHeaders(header_data)
    });
    return next.handle(dupReq);
  }
}
