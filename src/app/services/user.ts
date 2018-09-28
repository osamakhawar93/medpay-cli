import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ServiceUrl } from './serviceUrl';


@Injectable()
export class UserService {
   serviceUrl = new ServiceUrl();
   constructor(private http: Http) {
       
   }
   

   signUp(signupObject){

    var data;
    data = {email:signupObject.email,name:signupObject.name,password:signupObject.password,walletPassword:signupObject.ethPassword};
    let headers = new Headers();

    headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.post(this.serviceUrl.baseUrl + "users/register", data, { headers: headers })
        .map(res => res.json());

   }


   login(email,password){

    var data;
    data = {email:email,password:password};
    let headers = new Headers();

    headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.post(this.serviceUrl.baseUrl + "users/login", data, { headers: headers })
        .map(res => res.json());

   }


}