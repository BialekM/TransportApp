import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Token } from './Models/token';

@Injectable()
export class AuthGuard implements CanActivate {
    private token: Token;
    constructor(private router: Router) { }
    public canActivate() {
        try {
            this.token = JSON.parse(localStorage.getItem('currentUser'));
            if (this.token.accestoken != undefined) {
                return true;
            }
        } catch (err) {
            this.router.navigate(['/Login']);
            return false;
        }
    }


}