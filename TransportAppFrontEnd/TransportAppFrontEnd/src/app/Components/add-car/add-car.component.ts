import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    this.carService.AddCar(form.value);
  }
}
