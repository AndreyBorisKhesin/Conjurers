import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

let url = 'https://619f1ab9.ngrok.io';

@Injectable()
export class AuthService {
  constructor(public http: Http) {}

  postData(image): Promise<any> {
    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post(url, image, {headers: headers}).
      subscribe(res => {
        resolve(res.text());
      }, (err) => {
        reject(err);
      });
    });
  }
}
