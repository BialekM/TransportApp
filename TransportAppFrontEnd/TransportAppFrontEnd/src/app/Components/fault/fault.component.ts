import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Fault } from '../../Models/Fault';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fault',
  templateUrl: './fault.component.html',
  styleUrls: ['./fault.component.css']
})
export class FaultComponent implements OnInit {
  carId: number;
  faultId: number;
  fault: Fault;
  constructor(private carService: CarService, private route: ActivatedRoute) { }
 

  ngOnInit() {
   this.carId = +this.route.snapshot.params['id'];
   this.faultId= +this.route.snapshot.params['faultId'];
   this.fault = new Fault();
    if(this.carId!=0 && this.faultId!=0){
        this.carService.GetCarFault(this.carId,this.faultId).then(r =>{
        this.fault = r;
        });
      }
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    this.carService.AddFault(form.value,this.carId,this.faultId);
  }
}
