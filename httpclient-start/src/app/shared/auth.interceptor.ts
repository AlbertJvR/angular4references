import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  /*
  * HttpRequests can be typed so that only requests of that type are intercepted
  * HttpHandler necessary for request to continue its journey after interception
  */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    const copiedReq = req.clone({params: req.params.set('auth', token)});
    return next.handle(copiedReq); // next.handle passes message on
  }
}
