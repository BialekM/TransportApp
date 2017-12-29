import { Component, OnInit } from '@angular/core';
import { Fuel } from '../../Models/Fuel';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fuels-list',
  templateUrl: './fuels-list.component.html',
  styleUrls: ['./fuels-list.component.css']
})
export class FuelsListComponent implements OnInit {
  fuelList: Fuel[];
  carId: number;
  constructor(private carService: CarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.carId= +this.route.snapshot.params['carId'];
    this.carService.GetCarFuelList(this.carId).then(r => {this.fuelList = r
    console.log(r[1])});
  }
  DeleteFuel(i: number) {
    console.log(this.fuelList[i].fuelId);
    this.carService.DeleteFuel(this.fuelList[i].fuelId).then(r => {
      console.log(r)
      if(r){
          this.fuelList.splice(i, 1);
      }
    });

  }
}