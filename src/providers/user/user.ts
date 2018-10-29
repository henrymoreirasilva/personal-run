import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  uri: string = 'http://aprun.web7053.uni5.net/api';

  constructor(public http: HttpClient, public storage: Storage) {
    //console.log('Hello UserProvider Provider');
  }

  create(user: object) {
    return this.storage.set('user', user);
  }

  get(): Promise<any> {
    return this.storage.get('user');
  }

  // Quando deslogar deve remova do storage
  remove() {
    this.storage.remove('user');
  }

  login(data) {
    let queryString = `user=${data.user}&password=${data.password}`
    return this.http.post(`${this.uri}/auth.php`, queryString, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

  /*exist() {
    this.get().then(res => {
      console.log('resultado >>> ', res);
      if (res) {
        console.log('resultado IF');
        return true;
      } else {
        console.log('resultado else');
        return false;
      }
    });
  }*/
}
