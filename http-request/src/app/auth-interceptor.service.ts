import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // this class will implement with every request send by this app
    // we can set headers and manipulate some very important data through this service
    // you need to configure app.module ts => provider section as follows
    /*
    *  providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi:true // to all
      }],
    *
    * */
    console.log('Request is on the way');
    const modeifiedReq = req.clone({headers:req.headers.append('Auth','abc')});

    return next.handle(modeifiedReq);
  }

}
