import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Fault } from '../../Models/Fault';

@Component({
  selector: 'app-car-faults',
  templateUrl: './car-faults.component.html',
  styleUrls: ['./car-faults.component.css']
})
export class CarFaultsComponent implements OnInit {
  faultList: Fault[];
  id: number;
  constructor(private carService: CarService, private route: ActivatedRoute) { }
  ngOnInit() {
  this.id = +this.route.snapshot.params['id'];
  this.carService.GetCarFaultList(this.id).then(r => {this.faultList = r;}
  );
  }

  DeleteFault(i: number) {
    this.carService.DeleteFault(this.faultList[i].faultId).then(r => {
      console.log(r)
      if(r){
          this.faultList.splice(i, 1);
      }
    });
  }

}
