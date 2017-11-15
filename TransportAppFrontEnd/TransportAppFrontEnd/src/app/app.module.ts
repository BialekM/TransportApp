import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {routes} from './routing'
import { AppComponent } from './app.component';
import { CarService } from './services/car.service';
import { AdministratorMenuPanelComponent } from './Components/administrator-menu-panel/administrator-menu-panel.component';
import { AddCarComponent } from './Components/add-car/add-car.component';
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
import { FuelComponent } from './Components/fuel/fuel.component'

@NgModule({
  declarations: [
    AppComponent,
    AdministratorMenuPanelComponent,
    AddCarComponent,
    MainCarsComponent,
    AddWorkerComponent,
    GetUsersComponent,
    CarComponent,
    CarFaultsComponent,
    FaultComponent,
    FuelsListComponent,
    FuelComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CarService,WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
