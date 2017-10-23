import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';

// import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { CarModel } from '../Models/CarModel'
import 'rxjs/add/operator/map';
import { CarStatus } from '../Models/CarStatus';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class CarService {

  constructor(private http:Http) { }
  public carList: CarModel[];

  AddCar(addCarModel: CarModel): Promise<CarStatus>{

    const headers =  new Headers({ 'Content-Type': 'application/json'});
    return this.http.post("http://localhost:54116/AddCar", JSON.stringify({RegistrationNumber : addCarModel.RegistrationNumber, TypeOfCar: addCarModel.TypeOfCar, Model: addCarModel.Model,
    YearOfProduction: addCarModel.YearOfProduction, Power: addCarModel.Power, vinNumber: addCarModel.VinNumber, Factory: addCarModel.Factory, CarReviewDate: addCarModel.CarReviewDate ,
    OcEndDate: addCarModel.OcEndDate, Insurer: addCarModel.Insurer,UdtElevatorReviewWhen : addCarModel.UdtElevatorReviewWhen, UdtElevatorReviewFrom: addCarModel.UdtElevatorReviewFrom, 
     TachografReviewWhen: addCarModel.TachografReviewWhen, TachografReviewFrom: addCarModel.TachografReviewFrom,FaultList: null ,Owner: addCarModel.Owner}), { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise().
     then(response => {
      var y = response.json();
      return y;
  });
  }
  
  // GetCars(): Promise<CarModel[]> {
  //   return this.http.get("http://localhost:54116/GetCars").toPromise().then((response: Response) => {
  //   this.carList = response.json();
  //   return response.json() as CarModel[];
  //   })
  // }

}
  
  
  // EditPersonalData(editData: EditData): Promise<EditData> {
  //   return this.http.post(environment.baseUrl + 'account/editprofile', JSON.stringify({
  //     FirstName: editData.FirstName, LastName: editData.LastName, ActualPassword: editData.ActualPassword,
  //     NewPassword: editData.NewPasword, NewPasswordConfirm: editData.NewPasswordConfirm
  //   })).toPromise().then((response: Response) => {
  //     this.showMessage = true;
  //     this.Message = "Profil Zaktualizowany";
  //     return response.json() as PersonalData;
  //   }).catch(this.handleError);
  // }