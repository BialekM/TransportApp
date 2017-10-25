import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CarModel } from '../../Models/CarModel';
import {Moment} from '../../../../node_modules/moment'

@Component({
  selector: 'app-main-cars',
  templateUrl: './main-cars.component.html',
  styleUrls: ['./main-cars.component.css']
})

export class MainCarsComponent implements OnInit {
  
  constructor(private carService: CarService) {    
  }
  carList: CarModel[];
  ngOnInit() {
    this.carService.GetCars();
    this.CreateCarList();
  }

  CreateCarList(){
    // this.carService.GetCars();
    this.carList=this.carService.carList
    for(var i=0;i<this.carList.length;i++){
      this.carList[i].CarReviewDate = this.carList[i].CarReviewDate.getTimezoneOffset();
    }
  }

}
