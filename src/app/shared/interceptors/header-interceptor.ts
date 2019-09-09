import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenService} from '../providers/token.service';
import {Injectable} from '@angular/core';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!this.tokenService.authToken) {
      return next.handle(req);
    }

    const token = this.tokenService.authToken;

    req = req.clone({
      setHeaders: {
        Authorization: token
      }
    });

    return next.handle(req);
  }

}
