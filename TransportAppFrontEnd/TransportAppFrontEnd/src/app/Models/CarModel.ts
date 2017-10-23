import { Fault } from "./Fault";

export class CarModel{
    RegistrationNumber: string;
    CarReviewDate : Date;
    Factory: string;
    Insurer: string;
    Model : string;
    OcEndDate: Date;
    Owner : string;
    Power : number;
    TypeOfCar: string;
    YearOfProduction: number;
    VinNumber: string;
    UdtElevatorReviewFrom: Date;
    UdtElevatorReviewWhen: Date;
    TachografReviewFrom: Date;
    TachografReviewWhen: Date;
    FaultList : Array<Fault>;
}