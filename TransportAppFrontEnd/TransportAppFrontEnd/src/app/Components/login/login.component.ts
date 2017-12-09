import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authenticationService';
import { UserLoginData } from '../../Models/UserLoginData';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.logout();
  }

  Login(userLoginData: UserLoginData){
    this.authService.login(userLoginData).subscribe(result => {
      // console.log(result);
    })
  }

  CheckCorrectState(){
    if(AuthenticationService.token!=undefined && AuthenticationService.token.operationStatus=="bad"){
        return false;
    }
}

  onSubmit(form: NgForm): void {

      this.Login(form.value);
  }

}
