import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule} from './routing'
import { AppComponent } from './app.component';
import { CarService } from './services/car.service';
import { AdministratorMenuPanelComponent } from './Components/administrator-menu-panel/administrator-menu-panel.component';
import { AddCarComponent } from './Components/add-car/add-car.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministratorMenuPanelComponent,
    AddCarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
