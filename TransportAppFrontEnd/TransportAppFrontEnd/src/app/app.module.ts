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
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AdministratorMenuPanelComponent,
    AddCarComponent,
    MainCarsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
