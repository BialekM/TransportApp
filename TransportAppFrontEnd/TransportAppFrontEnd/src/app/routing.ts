import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component';
import {MainCarsComponent} from './Components/main-cars/main-cars.component'
import { AddCarComponent } from './Components/add-car/add-car.component';
import { AddWorkerComponent } from './Components/add-worker/add-worker.component';
import { GetUsersComponent } from './Components/get-users/get-users.component';
import { CarComponent } from './Components/car/car.component';
import { CarFaultsComponent } from './Components/car-faults/car-faults.component';
import { FaultComponent } from './Components/fault/fault.component';
import { FuelsListComponent } from './Components/fuels-list/fuels-list.component';
import {FuelComponent} from './Components/fuel/fuel.component';
import { LoginComponent } from './Components/login/login.component';
export const routes: Routes = [
    { path: '', redirectTo: '/Login', pathMatch: 'full' },
    { path: 'GetCars', component: MainCarsComponent},
    { path: 'AddCar', component: AddCarComponent},
    // { path: 'AddWorker', component: AddWorkerComponent},
    { path: 'GetUsers', component: GetUsersComponent},
    { path: 'GetCar/:id', component: CarComponent},
    { path: 'AddWorker/:id', component: AddWorkerComponent},
    { path: 'CarFaults/:id', component: CarFaultsComponent},
    { path: 'GetFuels/:carId', component: FuelsListComponent },
    { path: 'CarFaults/:id/Fault/:faultId',component: FaultComponent},
    { path: 'GetFuels/:carId/Fuel/:fuelId',component: FuelComponent},
    { path: 'Login', component: LoginComponent},
    { path: '**' , component: MainCarsComponent},
  ];
