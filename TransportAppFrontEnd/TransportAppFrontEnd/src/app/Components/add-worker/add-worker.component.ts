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
  id: string;
  user: User;
  message = '';
  status = '';
  buttonClicked = false;
  confirmPassword = '';
  constructor(private workerService: WorkerService, private route: ActivatedRoute) {
    this.user = new User();
   }
  userType: string;
  ngOnInit() {
    this.id = (this.route.snapshot.params['id']).toString();
    if(this.id!="0"){
      this.workerService.GetUser(this.id).then(r=>{
      this.user = r;
      console.log(this.user.userName);
      this.userType = r.userType.toString();
      if(r.userType.toString()=="0"){
        this.userType="Boss";
        this.user.userType =0;
      }
      if(r.userType.toString()=="1"){
        this.userType="Mechanic";
        this.user.userType=1;
      }
      if(r.userType.toString()=="2"){
        this.userType="Worker";
        this.user.userType=3;
      }
    })
  }else{
    this.user = new User();
  }
  }

  onSubmit(form: NgForm): void {
    if (form.valid && this.TheSamePassword(this.confirmPassword,this.user.password)){
      this.user = form.value;
      this.user.id = this.id;
      this.workerService.AddWorker(this.user).then(Response => {
        this.message = Response.message;
        console.log(this.message);
        this.status = Response.status;
        console.log(this.status)
      });
    }else {
      return;
    }
  }

  IsEmptyParam(parametr: string){
    if(parametr===undefined){
      return true;
    }else{
      return false;
    }
  }

  ButtonClicked() {
    this.buttonClicked = true;
  }

  IsEmpty(element: HTMLInputElement) {
    if (element.value === '') {
      return true;
    }
  }
  IdZero(){
    if(this.id!=="0"){
      console.log(this.id);
      return false;
    }else{
      return true;
    }
  }

  TheSamePassword(password:String, confirmPassword: String){
    if(password===confirmPassword){
      return true;
    }else{
      return false;
    }
  }
}
