import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

let url = 'https://api.thewallscript.com/restful/';

@Injectable()
export class AuthService {
  constructor(public http: Http) {}

  postData(image){
    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post(url, JSON.stringify(image), {headers: headers}).
      subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
    });
  }
}
