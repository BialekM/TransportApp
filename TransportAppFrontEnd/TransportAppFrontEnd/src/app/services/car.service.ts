import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { CarStatus } from '../Models/CarStatus';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Car } from '../Models/Car';
import { Fault } from '../Models/Fault';
import { Fuel } from '../Models/Fuel';

@Injectable()
export class CarService {

  constructor(private http:Http) { }

  public carList: Car[];


  DeleteCar(carModel: Car): Promise<CarStatus>{
    const headers =  new Headers({ 'Content-Type': 'application/json'});
    return this.http.post('http://localhost:54117/DeleteCar', JSON.stringify({registrationNumber : carModel.registrationNumber,
    id: carModel.id,
    typeOfCar: carModel.typeOfCar, Model: carModel.model,
    YearOfProduction: carModel.yearOfProduction, Power: carModel.power,
    vinNumber: carModel.vinNumber, Factory: carModel.factory,
    CarReviewDate: carModel.carReviewDate ,
    OcEndDate: carModel.ocEndDate,
    Insurer: carModel.insurer, UdtElevatorReviewWhen : carModel.udtElevatorReviewWhen,
    UdtElevatorReviewFrom: carModel.udtElevatorReviewFrom,
    TachografReviewWhen: carModel.tachografReviewWhen, TachografReviewFrom: carModel.tachografReviewFrom,
    FaultList: null , Owner: carModel.owner}), { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise().
    then(response => {
      const y = response.json();
      return y;
  });
  }
  AddCar(addCarModel: Car): Promise<CarStatus>{
    const headers =  new Headers({ 'Content-Type': 'application/json'});
    return this.http.post('http://localhost:54117/AddCar', JSON.stringify({registrationNumber : addCarModel.registrationNumber,
    id: addCarModel.id,
    typeOfCar: addCarModel.typeOfCar, Model: addCarModel.model,
    YearOfProduction: addCarModel.yearOfProduction, Power: addCarModel.power,
    vinNumber: addCarModel.vinNumber, Factory: addCarModel.factory,
    CarReviewDate: addCarModel.carReviewDate ,
    OcEndDate: addCarModel.ocEndDate,
    Insurer: addCarModel.insurer, UdtElevatorReviewWhen : addCarModel.udtElevatorReviewWhen,
    UdtElevatorReviewFrom: addCarModel.udtElevatorReviewFrom,
    TachografReviewWhen: addCarModel.tachografReviewWhen, TachografReviewFrom: addCarModel.tachografReviewFrom,
    FaultList: null , Owner: addCarModel.owner}), { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise().
    then(response => {
      const y = response.json();
      return y;
  });
  }
  GetCars(): Promise<Car[]> {
    const headers =  new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('currentUser')});
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:54117/GetCars',options).toPromise().then((response: Response) => {
    this.carList = response.json();
    return response.json() as Car[];
    });
  }

  GetCar(carId: number): Promise<Car> {
    return this.http.get('http://localhost:54117/GetCar/'+ carId).toPromise().then((response: Response) => {
      return response.json() as Car;
      });
  }
  GetCarFaultList(carId: number): Promise<Fault[]>{
    return this.http.get('http://localhost:54117/GetCarFaultList/'+ carId).toPromise().then((response:Response)=>{
      console.log(response);
      return response.json() as Fault[];
    })
  }

  GetCarFault(carId: number,faultId:number): Promise<Fault>{
    return this.http.get('http://localhost:54117/GetCarFault/'+ carId + '/Fault/' + faultId).toPromise().then((response:Response)=>{
      console.log(response);
      return response.json() as Fault;
    })
  }

  GetCarFuelList(carId: number): Promise<Fuel[]>{
    return this.http.get('http://localhost:54117/GetCarFuelList/'+ carId).toPromise().then((response:Response) =>{
      console.log(response);
      return response.json() as Fuel[];
    })
  }

  GetCarFuel(carId: number,fuelId:number): Promise<Fuel>{
    return this.http.get('http://localhost:54117/GetCarFuel/'+ carId + '/Fuel/' + fuelId).toPromise().then((response:Response)=>{
      console.log(response);
      return response.json() as Fuel;
    })
  }

  AddFault(fault: Fault,carIdd: number, faultIdd:number): Promise<CarStatus>{
    return this.http.post("http://localhost:54117/AddFault", JSON.stringify({faultInformation : fault.faultInformation,
    priority: fault.priority, mechanicDone: fault.mechanicDone,
    confirmDone: fault.confirmDone, carId: carIdd, faultId: faultIdd
    }), { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise().
    then(response => {
    let y = response.json();
    return y;
  });
  }

  DeleteFault( faultIdd: number): Promise<Boolean>{
    return this.http.post("http://localhost:54117/DeleteFault", faultIdd,
    { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise().
    then(response => {
    let y = response.json();
    return y;
  });
  }

  DeleteFuel( fuelId: number): Promise<Boolean>{
    return this.http.post("http://localhost:54117/DeleteFuel", fuelId,
    { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise().
    then(response => {
    let y = response.json();
    return y;
  });
  }

  AddFuel(fuel: Fuel): Promise<CarStatus>{
    return this.http.post("http://localhost:54117/AddFuel", JSON.stringify({fuelId : fuel.fuelId, dateOfFuel: fuel.dateOfFuel,
    carId: fuel.carId, numberOfLitres: fuel.numberOfLitres, price: fuel.price, userName: fuel.userName, surname: fuel.surname
    }), { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise().
    then(response => {
    let y = response.json();
    return y;
  });
  }
}
