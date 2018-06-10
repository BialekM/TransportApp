import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component';
import {MainCarsComponent} from './Components/main-cars/main-cars.component';
import { AddWorkerComponent } from './Components/add-worker/add-worker.component';
import { GetUsersComponent } from './Components/get-users/get-users.component';
import { CarComponent } from './Components/car/car.component';
import { CarFaultsComponent } from './Components/car-faults/car-faults.component';
import { FaultComponent } from './Components/fault/fault.component';
import { FuelsListComponent } from './Components/fuels-list/fuels-list.component';
import {FuelComponent} from './Components/fuel/fuel.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './auth.guard';
import {SurveyComponent} from './Components/survey/survey.component';
import { SurveyListComponent } from './Components/survey-list/survey-list.component';
import { MechanicCarPanelComponent } from './Components/mechanic-car-panel/mechanic-car-panel.component';
import { MechanicFaultsListComponent } from './Components/mechanic-faults-list/mechanic-faults-list.component';
import { MechanicAddFaultComponent } from './Components/mechanic-add-fault/mechanic-add-fault.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
export const routes: Routes = [
    { path: '', redirectTo: '/Login', pathMatch: 'full' },
    { path: 'GetCars', component: MainCarsComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},
    { path: 'GetUsers', component: GetUsersComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},
    { path: 'GetCar/:id', component: CarComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},
    { path: 'AddWorker/:id', component: AddWorkerComponent},
    { path: 'CarFaults/:id', component: CarFaultsComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},
    { path: 'GetFuels/:carId', component: FuelsListComponent, canActivate: [AuthGuard], data: {roles: ['Admin']} },   
    { path: 'CarFaults/:id/Fault/:faultId', component: FaultComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},
    { path: 'GetFuels/:carId/Fuel/:fuelId', component: FuelComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},
    { path: 'GetSurveys/:id', component: SurveyListComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},
    { path: 'GetSurveys/:id/Survey/:surveyid', component: SurveyComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},
    { path: 'GetMechanicCars', component: MechanicCarPanelComponent, canActivate: [AuthGuard], data: {roles: ['Mechanic'],redirectTo: '/Login'}},
    { path: 'GetMechanicfaultsList/:id', component: MechanicFaultsListComponent, canActivate: [AuthGuard], data: {roles: ['Mechanic']}},
    { path: 'GetMechanicfaultsList/:id/Fault/0', component: MechanicAddFaultComponent, canActivate: [AuthGuard], data: {roles: ['Mechanic']}},
    { path: 'ChangePassword', component: ChangePasswordComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Mechanic','Worker']} },   
    { path: 'Login', component: LoginComponent},
    { path: '**', redirectTo: 'Login', pathMatch: 'full' },
  ];
