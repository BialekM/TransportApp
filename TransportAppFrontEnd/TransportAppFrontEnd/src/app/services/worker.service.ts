import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { CarStatus } from '../Models/CarStatus';

@Injectable()
export class WorkerService {

  constructor(private http: Http) { }
  AddWorker(user: User): Promise<CarStatus>{
    return this.http.post('http://localhost:54117/AddUser', JSON.stringify({pesel : user.pesel, userName: user.userName,
    userType: user.userType,
    login: user.login, password: user.password, surname: user.surname}),
    { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise().
     then(response => {
      let y = response.json();
      return y;
  });
  }

  GetWorkers(): Promise<User[]> {
    return this.http.get('http://localhost:54117/GetUsers').toPromise().then((response: Response) => {
    return response.json() as User[];
    });
  }
}
