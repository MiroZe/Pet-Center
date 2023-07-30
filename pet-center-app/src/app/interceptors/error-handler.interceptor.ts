import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MessageDispatcherService } from '../core/message-dispatcher.service';
import { MessageType } from '../interfaces/messages';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private messageDispatcher: MessageDispatcherService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((error) => {
      this.messageDispatcher.notifyForMessage(
        {
          text: error.error?.message,
          type: MessageType.Error
        }
      )

      return throwError(() => error)
    } ))
  }
}


export const MessageInterceptorProvider :Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass : ErrorHandlerInterceptor,
  multi:true
}