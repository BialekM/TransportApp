import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AddCarComponent } from './Components/add-car/add-car.component';
import { MainCarsComponent } from './Components/main-cars/main-cars.component';
import { AddWorkerComponent } from './Components/add-worker/add-worker.component'; 

export const appRoutes: Routes = [
  { path: 'getCars', component: AddCarComponent },
  { path: 'AddCar',        component: AddCarComponent },
  { path: '',   redirectTo: '/getCars', pathMatch: 'full' },
  { path: 'AddWorker', component: AddWorkerComponent},
  { path: '**', component: AddCarComponent }
];
 