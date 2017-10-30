import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Moment } from '../../../../node_modules/moment'
import { Car } from '../../Models/Car';

@Component({
  selector: 'app-main-cars',
  templateUrl: './main-cars.component.html',
  styleUrls: ['./main-cars.component.css']
})

export class MainCarsComponent implements OnInit {

  constructor(private carService: CarService) {
  }
  carList: Car[];
  liczba: number;

  ngOnInit() {
    this.carService.GetCars().then(r => {

      this.carList = r; 
   });
  }

  DateAregood(i: number) {

    // console.log(this.carList[i].carReviewDate)
   let date= new Date(this.carList[i].carReviewDate);
   let date2=Date.now();
  console.log(date2 - date.getDate())
  if(date2 - date.getDate()>=100*24*60*60){
    return true;
  }else{
    return false;
  }
  }

}
