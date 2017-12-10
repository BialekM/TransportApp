import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authenticationService';
import { UserLoginData } from '../../Models/UserLoginData';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  buttonClicked = false;
  loading = false;
  error = '';

  constructor(private authService: AuthenticationService,private router: Router ,private authGuard : AuthGuard) { }

  ngOnInit() {
    this.authService.logout();
  }

  // Login(userLoginData: UserLoginData){
  //   this.authService.login(userLoginData).subscribe(result => {
  //     // console.log(result);
  //   })
  // }

  Login(userLoginData: UserLoginData) {
    this.loading = true;
    this.authService.login(userLoginData)
    .subscribe(result => {
       if(this.authGuard.canActivate()){
      this.router.navigate(['/AddCar']);
      }else{
      this.error = 'username or password is incorrect';
      this.loading = false;
      }
    })
  }

  CheckCorrectState(){
    if(AuthenticationService.token!=undefined && AuthenticationService.token.operationStatus=="bad"){
        return false;
    }
  }

  IsEmpty(inputValue: HTMLInputElement) {
    if (inputValue.value == "") {
      return true;
    } else {
      return false;
    }
  }

  onSubmit(form: NgForm): void {
    if(form.valid){
      this.Login(form.value);
    }else{
      return;
    }  
  }

  ButtonClicked(){
    this.buttonClicked=true;
  }

}
