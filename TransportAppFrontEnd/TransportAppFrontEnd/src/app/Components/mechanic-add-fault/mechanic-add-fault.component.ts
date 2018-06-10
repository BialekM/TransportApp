import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Fault } from '../../Models/Fault';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mechanic-add-fault',
  templateUrl: './mechanic-add-fault.component.html',
  styleUrls: ['./mechanic-add-fault.component.css']
})
export class MechanicAddFaultComponent implements OnInit {

  carId: number;
  faultId: number;
  fault: Fault;
  message = '';
  status = '';
  buttonClicked = false;
  constructor(private carService: CarService, private route: ActivatedRoute) {
   this.fault = new Fault();
   this.fault.faultInformation='';
   }

  ngOnInit() {
   this.carId = +this.route.snapshot.params['id'];
   this.faultId= +this.route.snapshot.params['faultId'];
   this.fault = new Fault();
   this.fault.faultInformation="";
  }
  
  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.fault = form.value;
      this.fault.faultId = 0;
      this.fault.carId = this.carId;
      console.log(this.fault);
      console.log(this.carId);
      console.log(this.fault.faultId);
      this.carService.AddFault(this.fault, this.carId, this.fault.faultId).then(Response => {
        this.message = Response.message;
        this.status = Response.status;
      });
    }else {
      return;
    }
  }

  ButtonClicked() {
    this.buttonClicked = true;
  }

  IsEmptyParam(parametr: string){
    if(parametr===undefined){
      return true;
    }else{
      return false;
    }
  }

}
