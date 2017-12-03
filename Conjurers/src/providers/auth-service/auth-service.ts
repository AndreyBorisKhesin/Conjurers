import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

let url = 'http://localhost:5000';

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
