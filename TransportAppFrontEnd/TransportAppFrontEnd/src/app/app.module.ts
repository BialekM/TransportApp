import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {routes} from './routing';
import { AppComponent } from './app.component';
import { CarService } from './services/car.service';
import { AdministratorMenuPanelComponent } from './Components/administrator-menu-panel/administrator-menu-panel.component';
import { MainCarsComponent } from './Components/main-cars/main-cars.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AddWorkerComponent } from './Components/add-worker/add-worker.component';
import { WorkerService } from './services/worker.service';
import { GetUsersComponent } from './Components/get-users/get-users.component';
import { CarComponent } from './Components/car/car.component';
import { CarFaultsComponent} from './Components/car-faults/car-faults.component';
import { FaultComponent } from './Components/fault/fault.component';
import { FuelsListComponent } from './Components/fuels-list/fuels-list.component';
import { FuelComponent } from './Components/fuel/fuel.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthenticationService } from './services/authenticationService';
import { JwtHelper } from 'angular2-jwt';
import {SuiModule} from 'ng2-semantic-ui';
import { AuthGuard } from './auth.guard';
import { SurveyComponent } from './Components/survey/survey.component';
import { SurveyListComponent} from './Components/survey-list/survey-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministratorMenuPanelComponent,
    MainCarsComponent,
    AddWorkerComponent,
    GetUsersComponent,
    CarComponent,
    CarFaultsComponent,
    FaultComponent,
    FuelsListComponent,
    FuelComponent,
    LoginComponent,
    SurveyComponent,
    SurveyListComponent
  ],
  imports: [
    SuiModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CarService, WorkerService, AuthenticationService, JwtHelper, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
