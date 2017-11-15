import { Fault } from "./Fault";

export class Car{
    id: number;
    registrationNumber: string;
    carReviewDate : Date;
    factory: string;
    insurer: string;
    model : string;
    ocEndDate: Date;
    owner : string;
    power : number;
    typeOfCar: string;
    yearOfProduction: number;
    vinNumber: string;
    udtElevatorReviewFrom: Date;
    udtElevatorReviewWhen: Date;
    tachografReviewFrom: Date;
    tachografReviewWhen: Date;
    faultList : Array<Fault>;
}