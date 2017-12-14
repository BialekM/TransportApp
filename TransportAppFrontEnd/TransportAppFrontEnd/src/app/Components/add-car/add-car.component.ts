import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  checkTachograf: boolean;
  checkUdt: boolean;
  buttonClicked = false;
  loading = false;
  error = '';
  message = '';
  status = '';
  constructor(private carService: CarService) { }
  ngOnInit() {
  this.checkTachograf = false;
  this.checkUdt = false;
  }
   onSubmit(form: NgForm): void {
    if (form.valid) {
      this.carService.AddCar(form.value).then(Response => {
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
