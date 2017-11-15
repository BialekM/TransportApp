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
  FuelList: Fuel[];
  carId: number;
  constructor(private carService: CarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.carId= +this.route.snapshot.params['carId'];
    this.carService.GetCarFuelList(this.carId).then(r => {this.FuelList = r});
  }

}
