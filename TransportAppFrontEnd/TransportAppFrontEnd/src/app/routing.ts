import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component';
import {MainCarsComponent} from './Components/main-cars/main-cars.component'

export const routes: Routes = [
    { path: '', redirectTo: '/nic', pathMatch: 'full' },
    { path: 'GetCars', component: MainCarsComponent},
    { path: '**' , component: AppComponent}
  ];