import { Survey } from "./Survey";

enum UserType{
    Boss,Mechanic,Worker
}
export class User{
    id: string;
    pesel: number;
    userName : string;
    userType: UserType;
    login: string;
    password : string;
    surname: string;
    listOfSurvey: Survey[];
}

