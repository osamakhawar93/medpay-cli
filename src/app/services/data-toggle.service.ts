import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataToggleService {

    public emptyString :any;
    public emptyName:any;

  private messageSource = new BehaviorSubject(this.emptyString);
  currentMessage = this.messageSource.asObservable();

  private messageSource2 = new BehaviorSubject(this.emptyName);
  currentMessage2 = this.messageSource2.asObservable();
  constructor() { }

  changeMessage(message: any) {
      this.emptyString  = message;
    this.messageSource.next(this.emptyString)
  }

  changeName(message2: any) {
    this.emptyName  = message2;
  this.messageSource2.next(this.emptyName)
}
}
