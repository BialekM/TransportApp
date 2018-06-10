import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { CarStatus } from '../Models/CarStatus';
import { Survey } from '../Models/Survey';

@Injectable()
export class WorkerService {

  constructor(private http: Http) { }
  
  AddWorker(user: User): Promise<CarStatus>{
    return this.http.post('http://localhost:54117/AddUser', JSON.stringify({pesel : user.pesel, userName: user.userName,
    userType: user.userType,
    firstName: user.firstName, password: user.password, surname: user.surname, id : user.id}),
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
  GetUser(id: string): Promise<User>{
    return this.http.get('http://localhost:54117/GetUser/'+ id).toPromise().then((response: Response)=>{
      return response.json() as User;
    });
  }

  GetSurveys(id: string): Promise<Survey[]>{
    return this.http.get('http://localhost:54117/GetSurvey/' + id).toPromise().then((response: Response) => {
    return response.json() as Survey[];
    });
    }

  DeleteWorker(user: User): Promise<Boolean>{
    return this.http.post('http://localhost:54117/DeleteUser', JSON.stringify({pesel : user.pesel, userName: user.userName,
    userType: user.userType,
    login: user.userName, password: user.password, surname: user.surname, id : user.id}),
    { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise().
     then(response => {
      let y = response.json();
      return y;
  });
  }

  GetSurvey(userId: string, surveyId: number): Promise<Survey>{
    return this.http.get('http://localhost:54117/GetSurvey/' + userId + '/User/' + surveyId).toPromise().then((response: Response) => {
    return response.json() as Survey;
    });
  }

  AddSurvey(survey: Survey): Promise<CarStatus>{
    return this.http.post('http://localhost:54117/AddSurvey', JSON.stringify({surveyId : survey.surveyId, userid: survey.userId,
    surveyDescription: survey.surveyDescription, reviewWhen: survey.reviewWhen,
    reviewFrom: survey.reviewFrom}),
    { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise().
     then(response => {
      let y = response.json();
      return y;
  });
  }

  DeleteSurvey(id: number): Promise<Boolean>{
    console.log(id);
    return this.http.post('http://localhost:54117/DeleteSurvey', JSON.stringify({id: id}),
    { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise().
     then(response => {
      let y = response.json();
      return y;
  });
  }  

  ChangePassword(actualPassword: string, newPassword: string): Promise<CarStatus>{
    const header =  new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('currentUser')});
    let options = new RequestOptions({ headers: header })
    console.log(actualPassword);
    console.log(newPassword);
    return this.http.post('http://localhost:54117/ChangePassword', JSON.stringify({actualPassword: "kurwiszonJebany"}) ,{headers: new Headers({'Authorization': 'Bearer ' + localStorage.getItem('currentUser'),'Content-Type': 'application/json'})}).toPromise().
     then(response => {
      let y = response.json();
      return y;
  });
  }
}
