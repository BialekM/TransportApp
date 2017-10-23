enum Priority {
    Hihgt,Medium,Hard
}

export class Fault{
    FaultId: number;
    FaultInformation: string;
    Priority: Priority;
    MechanicDone: Boolean;
    ConfrimDone: Boolean;
}