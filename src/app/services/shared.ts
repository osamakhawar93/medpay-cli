import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ServiceUrl } from './serviceUrl';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SharedService {
  serviceUrl = new ServiceUrl();
  constructor(private http: Http) {

  }


  // Observable string sources

  private emitChangeSource = new Subject<any>();
  private authHeaderListSelected = new Subject<any>();

  // Observable string streams

  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands


  //sir osama's shared service //
  language = new Subject<any>();
  logginStatus = new Subject<any>();

  private ChangeUserObject = new Subject<any>();


  changeEmittedForLanguage$ = this.language.asObservable();
  changeLoggedInStatus$ = this.logginStatus.asObservable();

  changeEmittedForUserUpdation$ = this.ChangeUserObject.asObservable();

  changeEmittedForAuthHeaderListSelected$ = this.authHeaderListSelected.asObservable();


  changeLanguage(language) {
    this.language.next(language);
  }


  changeLoginStatus(status) {
    this.logginStatus.next(status);
  }


  changeListItem(listItem) {
    this.authHeaderListSelected.next(listItem);
  }


  //sir osama's shared service //





}