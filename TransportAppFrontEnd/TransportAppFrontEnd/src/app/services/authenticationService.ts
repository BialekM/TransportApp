import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Token } from '../Models/token';
import { UserLoginData } from '../Models/UserLoginData';
import { JwtHelper } from 'angular2-jwt';
import { DecodeToken } from '../Models/DecodeToken';

@Injectable()
export class AuthenticationService{
    public static token : Token;
    private decodeTeoken : DecodeToken;
    constructor(private http:Http,private jwtHelper: JwtHelper){

    }

    login(userLoginData: UserLoginData): Observable<Token>{
            return this.http.post("http://localhost:54117/auth/login", JSON.stringify({Login : userLoginData.Login, Password : userLoginData.Password 
                }),{ headers: new Headers({ 'Content-Type': 'application/json' }) }
            ).map((response:Response) => {
                AuthenticationService.token = response.json();
                if(AuthenticationService.token.operationStatus=="ok"){
                    localStorage.setItem('currentUser',AuthenticationService.token.accestoken);
                }
                //  console.log(this.jwtHelper.decodeToken(localStorage.getItem('currentUser')))
                // this.decodeTeoken = this.jwtHelper.decodeToken(localStorage.getItem('currentUser'));
                // console.log(this.decodeTeoken.roles[1]);
                return response.json();  
        });
    }

    DecodeToken(){
        return this.jwtHelper.decodeToken(localStorage.getItem('currentUser'))
    }

  
    // GetUserNameFromToken(): Observable<DecodeToken>{

    // }

    logout():void{
        localStorage.removeItem('currentUser');
    }
}