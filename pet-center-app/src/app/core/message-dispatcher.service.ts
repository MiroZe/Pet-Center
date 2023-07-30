import { Injectable } from '@angular/core';
import { Message, MessageType } from '../interfaces/messages';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageDispatcherService {

  constructor() { }

  private messageQ$$ = new Subject<Message | undefined>();
  public messageQ$ = this.messageQ$$.asObservable();

  notifyForMessage(message : {text:string, type: MessageType}) {

    this.messageQ$$.next(message)

  }

  clearMessage() {
    this.messageQ$$.next(undefined)
  }


  
}
