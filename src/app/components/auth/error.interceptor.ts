import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = 'hata oluştu';
        if (!navigator.onLine) {
          message = 'İnternet Bağlantısı Sorunu';
          return throwError(message);
        }

        if (error.error.error) {
          switch (error.error.error.message) {
            case 'EMAIL_EXISTS':
              message = 'Mail Adresi Kullanılmış';
              break;
            case 'EMAIL_NOT_FOUND':
              message = 'Mail Adresi Bulunamadı';
              break;
            case 'INVALID_PASSWORD':
              message = 'Hatalı Şifre';
              break;
            default:
              break;
          }
        }
        return throwError(message);
      })
    );
  }
}
