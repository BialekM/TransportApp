import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component';
import {MainCarsComponent} from './Components/main-cars/main-cars.component'
import { AddCarComponent } from './Components/add-car/add-car.component';
import { AddWorkerComponent } from './Components/add-worker/add-worker.component';
import { GetUsersComponent } from './Components/get-users/get-users.component';
import { CarComponent } from './Components/car/car.component';

export const routes: Routes = [
    { path: '', redirectTo: '/nic', pathMatch: 'full' },
    { path: 'GetCars', component: MainCarsComponent},
    { path: 'AddCar', component: AddCarComponent},
    { path: 'AddWorker', component: AddWorkerComponent},
    { path: 'GetUsers', component: GetUsersComponent},
    { path: 'Car', component: CarComponent},
    { path: '**' , component: MainCarsComponent},
  ];
