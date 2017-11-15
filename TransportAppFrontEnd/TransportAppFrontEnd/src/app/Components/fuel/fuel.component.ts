import { Component, OnInit } from '@angular/core';
import { Fuel } from '../../Models/Fuel';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css']
})
export class FuelComponent implements OnInit {

  carId: number;
  fuelId: number;
  fuel: Fuel;
  constructor(private carService: CarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.carId = +this.route.snapshot.params['carId'];
    this.fuelId= +this.route.snapshot.params['fuelId'];
    this.fuel = new Fuel();
     if(this.carId!=0 && this.fuelId!=0){
         this.carService.GetCarFuel(this.carId,this.fuelId).then(r =>{
         this.fuel = r;
         });
       }
  }

  onSubmit(form: NgForm): void {
    this.carService.AddFuel(form.value,this.carId,this.fuelId);
  }

}
