import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Token } from '../Models/token';
import { UserLoginData } from '../Models/UserLoginData';
import { JwtHelper } from 'angular2-jwt';
import { DecodeToken } from '../Models/DecodeToken';
import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
@Injectable()
export class AuthenticationService{
    public static token : Token;
    private decodeTeoken : DecodeToken;
    constructor(private _router: Router,private http:Http,private jwtHelper: JwtHelper,){
    }

    login(userLoginData: UserLoginData): Observable<Token>{
            return this.http.post("http://localhost:54117/auth/login", JSON.stringify({Login : userLoginData.Login, Password : userLoginData.Password 
                }),{ headers: new Headers({ 'Content-Type': 'application/json' }) }
            ).map((response:Response) => {
                AuthenticationService.token = response.json();
                if(AuthenticationService.token.operationStatus=="ok"){
                    localStorage.setItem('currentUser', AuthenticationService.token.accestoken);
                    setInterval(function(){
                        localStorage.clear();
                    }, 1000*10*60);
                }
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
        this._router.navigate(['/Login']);
    }
}