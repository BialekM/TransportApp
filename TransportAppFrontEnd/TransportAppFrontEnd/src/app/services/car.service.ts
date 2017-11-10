import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { CarStatus } from '../Models/CarStatus';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Car } from '../Models/Car';

@Injectable()
export class CarService {

  constructor(private http:Http) { }
  public carList: Car[];

  AddCar(addCarModel: Car): Promise<CarStatus>{
    const headers =  new Headers({ 'Content-Type': 'application/json'});
    return this.http.post("http://localhost:54117/AddCar", JSON.stringify({registrationNumber : addCarModel.registrationNumber, typeOfCar: addCarModel.typeOfCar, Model: addCarModel.model,
    YearOfProduction: addCarModel.yearOfProduction, Power: addCarModel.power, vinNumber: addCarModel.vinNumber, Factory: addCarModel.factory, CarReviewDate: addCarModel.carReviewDate ,
    OcEndDate: addCarModel.ocEndDate, Insurer: addCarModel.insurer,UdtElevatorReviewWhen : addCarModel.udtElevatorReviewWhen, UdtElevatorReviewFrom: addCarModel.udtElevatorReviewFrom, 
     TachografReviewWhen: addCarModel.tachografReviewWhen, TachografReviewFrom: addCarModel.tachografReviewFrom,FaultList: null ,Owner: addCarModel.owner}), { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise().
     then(response => {
      var y = response.json();
      return y;
  });
  }
  
  GetCars(): Promise<Car[]> {
    return this.http.get('http://localhost:54117/GetCars').toPromise().then((response: Response) => {
    this.carList = response.json();
    return response.json() as Car[];
    });
  }

  GetCar(): Promise<Car> {
    return this.http.get('http://localhost:54117/GetCar').toPromise().then((response: Response) => {
      return response.json() as Car;
      });
  }

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