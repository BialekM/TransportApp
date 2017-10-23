import { Component, OnInit } from '@angular/core';
import { HttpModule }    from '@angular/http';
import {CarService} from './services/car.service';
import { Router } from '@angular/router';
import {AdministratorMenuPanelComponent} from './Components/administrator-menu-panel/administrator-menu-panel.component'
import {AddCarComponent} from './Components/add-car/add-car.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  title = 'app';

  constructor(
    private carService: CarService,
    private router : Router){}
}





