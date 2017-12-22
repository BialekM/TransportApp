import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../Models/Car';
import { ActivatedRoute, } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  

  constructor(private carService: CarService, private route: ActivatedRoute, private location: Location) { }
  id: number;
  car: Car;
  carOcEndDate: string;
  carTachografReviewFrom: string;
  carTachografReviewWhen: string;
  carUdtElevatorReviewFrom: string;
  carUdtElevatorReviewWhen: string;
  checkTachograf: boolean;
  checkUdt: boolean;
  buttonClicked = false;
  loading = false;
  error = '';
  message = '';
  status = '';
  carReviewDate: string;

    ngOnInit() {
        this.car = new Car();
        this.id = +this.route.snapshot.params['id'];
        if(this.id !== 0) {
        this.carService.GetCar(this.id).then(r => { 
        this.car = r;
        this.carReviewDate = r.carReviewDate.toString().substr(0,10);
        this.carOcEndDate = r.ocEndDate.toString().substr(0,10);
        if(r.tachografReviewFrom != undefined || r.tachografReviewFrom != null){
          this.carTachografReviewFrom=r.tachografReviewFrom.toString().substr(0,10);
        }
        if(r.tachografReviewWhen!= undefined || r.tachografReviewWhen != null){
          this.carTachografReviewWhen=r.tachografReviewWhen.toString().substr(0,10);
        }
        if(r.udtElevatorReviewFrom != undefined || r.udtElevatorReviewFrom != null){
          this.carUdtElevatorReviewFrom=r.udtElevatorReviewFrom.toString().substr(0,10);
        }
        if(r.udtElevatorReviewWhen!= undefined || r.udtElevatorReviewWhen != null){
          this.carUdtElevatorReviewWhen = r.udtElevatorReviewWhen.toString().substr(0,10);
        }
      });
    }
  }
  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.car = form.value;
      this.car.id = this.id;
      this.carService.AddCar(this.car).then(Response => {
        this.message = Response.message;
        console.log(this.message);
        this.status = Response.status;
        console.log(this.status);
      });
    }else {
      return;
    }
  }

  IsEmpty(element: HTMLInputElement) {
    if (element.value === '') {
      return true;
    }
  }

  ButtonClicked() {
    this.buttonClicked = true;
  }
}
