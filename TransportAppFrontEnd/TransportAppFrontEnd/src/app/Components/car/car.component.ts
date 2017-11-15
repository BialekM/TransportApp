import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../Models/Car';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService, private route: ActivatedRoute) { }
  car: Car;
  carReviewDate: string;
  carOcEndDate: string;
  carTachografReviewFrom: string;
  carTachografReviewWhen: string;
  carUdtElevatorReviewFrom: string;
  carUdtElevatorReviewWhen: string;

    ngOnInit() {
      let id = +this.route.snapshot.params['id'];
        if(id!=0){
          this.carService.GetCar(id).then(r => { 
        this.car = r;
        this.carReviewDate=r.carReviewDate.toString().substr(0,10);
        this.carOcEndDate=r.ocEndDate.toString().substr(0,10);
        this.carTachografReviewFrom=r.tachografReviewFrom.toString().substr(0,10);
        this.carTachografReviewWhen=r.tachografReviewWhen.toString().substr(0,10);
        this.carUdtElevatorReviewFrom=r.udtElevatorReviewFrom.toString().substr(0,10);
        this.carUdtElevatorReviewWhen =r.udtElevatorReviewWhen.toString().substr(0,10);
      }); 
    } 
  }
}
