import { Component, OnInit } from '@angular/core';
import { WorkerService } from './../../services/worker.service';
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { User } from '../../Models/User';
@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {
  user: User;
  constructor(private WorkerService: WorkerService, private route: ActivatedRoute) { }
  userType: string;
  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    if(id>0){
      this.WorkerService.GetUser(id).then(r=>{
      this.user = r;
      this.userType = r.userType.toString();
      if(r.userType.toString()=="0"){
        this.userType="Boss";
      }
      if(r.userType.toString()=="1"){
        this.userType="Mechanic";
      }
      if(r.userType.toString()=="2"){
        this.userType="Worker";
      }
    })
  }else{
    this.user = new User();
  }  
  }

  onSubmit(form: NgForm): void {
    this.WorkerService.AddWorker(form.value);
  }

}
