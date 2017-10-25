import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component';
import {MainCarsComponent} from './Components/main-cars/main-cars.component'
import { AddCarComponent } from './Components/add-car/add-car.component';

export const routes: Routes = [
    { path: '', redirectTo: '/nic', pathMatch: 'full' },
    { path: 'GetCars', component: MainCarsComponent}, 
    { path: 'AddCar', component: AddCarComponent},
    { path: '**' , component: MainCarsComponent},
  ];