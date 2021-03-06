import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Router } from '@angular/router';
import { Car } from '../../Models/Car';

@Component({
  selector: 'app-mechanic-car-panel',
  templateUrl: './mechanic-car-panel.component.html',
  styleUrls: ['./mechanic-car-panel.component.css']
})
export class MechanicCarPanelComponent implements OnInit {

  constructor(private carService: CarService, private router: Router) { }

  carList: Car[];
  liczba: number;
  message: string;

  ngOnInit() {
    this.carService.GetCars().then(r => {
      this.carList = r;
   });
  }

  DateAregood(i: number) {
    const ReviewDate = new Date(this.carList[i].carReviewDate).valueOf();
    const OcDate = new Date(this.carList[i].ocEndDate).valueOf();
    const Today = Date.now().valueOf();
    const diffReviewDays = Math.ceil((ReviewDate - Today) / (1000 * 3600 * 24));
    const diffOcDays = Math.ceil((OcDate - Today) / (1000 * 3600 * 24));
    if((diffReviewDays < 30 && diffReviewDays > - 30) || (diffOcDays < 30 && diffOcDays > - 30)) {
      this.message = 'Do przegladu pozostalo ' + diffReviewDays + ' dni. ' + 'Oc konczy sie za ' + diffOcDays + ' dni';
      return true;
    }else{
      return false;
    }
  }

  DeleteCar(i: number) {
    this.carService.DeleteCar(this.carList[i]).then(r => {
      if(r.status === 'Ok'){
        this.carList.splice(i, 1);
      }
    });
  }

}
