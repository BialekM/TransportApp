import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WorkerService } from '../../services/worker.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  Passwordd = "";
  ConfirmPasswordd="";
  NewPasswordd="";
  message ='';
  status='';
  buttonClicked = false;
  constructor(private workerService: WorkerService) {
   }

  ngOnInit() {
  }

  IsEmpty(inputValue: HTMLInputElement) {
    if (inputValue.value === '') {
      return true;
    } else {
      return false;
    }
  }

  TheSamePassword(password:String, confirmPassword: String){
    if(password===confirmPassword){
      return true;
    }else{
      return false;
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid && this.TheSamePassword(this.ConfirmPasswordd,this.NewPasswordd)){
      this.workerService.ChangePassword(this.NewPasswordd,this.Passwordd).then(Response => {
        this.message = Response.message;
        console.log(this.message);
        this.status = Response.status;
        console.log(this.status)
      });
    }else {
      return;
    }
  }

  ButtonClicked() {
    this.buttonClicked = true;
  }

}
