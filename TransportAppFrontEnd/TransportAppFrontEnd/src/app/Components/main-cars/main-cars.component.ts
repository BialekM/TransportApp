import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CarModel } from '../../Models/CarModel';

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
  }

  CreateCarList(){
    // this.carService.GetCars();
    this.carList=this.carService.carList
  }

}
