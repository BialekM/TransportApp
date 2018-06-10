import { Component, OnInit } from '@angular/core';
import { Fault } from '../../Models/Fault';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mechanic-faults-list',
  templateUrl: './mechanic-faults-list.component.html',
  styleUrls: ['./mechanic-faults-list.component.css']
})
export class MechanicFaultsListComponent implements OnInit {

  
  faultList: Fault[];
  id: number;
  
  constructor(private carService: CarService, private route: ActivatedRoute) { }
  
  ngOnInit() {
  this.id = +this.route.snapshot.params['id'];
  this.carService.GetCarFaultList(this.id).then(r => {this.faultList = r;}
  );
  }

  EditFault(fault: Fault){
    fault.mechanicDone = true;
    this.carService.AddFault(fault,fault.carId,fault.faultId);
  }

  ConfrimByMechanic(confirm: boolean){
    if(confirm==true){
      return "tak";
    }
    return "nie";
  }

}
