import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { CarStatus } from '../Models/CarStatus';

@Injectable()
export class WorkerService {

  constructor(private http:Http) { }
 
  AddWorker(user: User): Promise<CarStatus>{
    const headers =  new Headers({ 'Content-Type': 'application/json'});
    return this.http.post("http://localhost:54116/AddUser", JSON.stringify({pesel : user.pesel, userName: user.userName, userType: user.userType,
    login: user.login, password: user.password, surname: user.surname}), { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise().
     then(response => {
      var y = response.json();
      return y;
  });
  }
}
