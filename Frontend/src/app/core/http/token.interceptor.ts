import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.authUser.switchMap(authUser => {
      // if logged in
      if (authUser) {
        return Observable.fromPromise(authUser.getIdToken(true)).switchMap(token => {
          const request = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
          return next.handle(request);
        });

      // if logged out
      } else {
        return next.handle(req);
      }
    });
  }
}
