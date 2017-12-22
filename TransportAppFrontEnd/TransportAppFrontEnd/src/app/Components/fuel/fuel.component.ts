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
  message = '';
  status = '';
  buttonClicked = false;
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
    if (form.valid) {
      this.fuel = form.value;
      this.fuel.fuelid = this.fuelId;
      this.fuel.carId = this.carId;
      this.carService.AddFuel(this.fuel).then(Response => {
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
