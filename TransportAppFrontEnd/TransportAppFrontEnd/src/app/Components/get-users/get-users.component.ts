import { Component, OnInit } from '@angular/core';
import {WorkerService} from './../../services/worker.service';
import { User } from '../../Models/User';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  constructor(private workerService: WorkerService) { }
  userList: User[];
    ngOnInit() {
      this.workerService.GetWorkers().then(r => {
        this.userList = r;
      });
  }

  CheckUserType(a: string){
    if(a=="0"){
      return "Boss"
    }
    if(a=="1"){
      return "Mechanic"
    }
    if(a=="2"){
      return "Worker"
    }
  }

}
