enum Priority {
    Hihgt,Medium,Hard
}

export class Fault{
    faultId: number;
    carId: number;
    faultInformation: string;
    priority: Priority;
    mechanicDone: Boolean;
    confirmDone: Boolean;
}