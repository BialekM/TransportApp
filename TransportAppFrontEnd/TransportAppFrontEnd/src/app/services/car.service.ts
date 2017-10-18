import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Tachograf } from '../Models/Tachograf';
import 'rxjs/add/operator/toPromise';
import { AddCarModel } from '../Models/AddCarModel'
import 'rxjs/add/operator/map';
import { AddCarStatus } from '../Models/AddCarStatus';

@Injectable()
export class CarService {

  constructor(private http: Http) { }

  getHeroes(): Promise<Tachograf> {
    console.log("wchodzi");
    return this.http.get("http://localhost:54116/car")
               .toPromise()
               .then(response => response.json().data as Tachograf)
  }

  AddCar(addCarModel: AddCarModel): Promise<AddCarStatus>{
    return this.http.post("http://localhost:54116/AddCar", JSON.stringify({RegistrationNumber: addCarModel.RegistrationNumber, CarReviewDate: addCarModel.CarReviewDate ,Factory: addCarModel.Factory,
  Insurer: addCarModel.Insurer,Model: addCarModel.Model,OcEndDate: addCarModel.OcEndDate,Owner: addCarModel.Owner,Power: addCarModel.Power,TypeOfCar: addCarModel.TypeOfCar,
  YearOfProduction: addCarModel.YearOfProduction, VinNumber: addCarModel.VinNumber, UdtElevatorReviewFrom: addCarModel.UdtElevatorReviewFrom,
  UdtElevatorReviewWhen : addCarModel.UdtElevatorReviewWhen, TachografReviewFrom: addCarModel.TachografReviewFrom, TachografReviewWhen: addCarModel.TachografReviewWhen})).toPromise()
   .then((response: Response) => {
    return response.json() as AddCarStatus;
  })
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
}
