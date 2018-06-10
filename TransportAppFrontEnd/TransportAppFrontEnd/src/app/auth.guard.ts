import {Injectable} from '@angular/core';
import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Token } from './Models/token';
import { AuthenticationService } from './services/authenticationService';
import { DecodeToken} from './Models/DecodeToken';
@Injectable() export class AuthGuard implements CanActivate {
  private decodeToken: DecodeToken;
  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const roles = route.data['roles'] as Array<string>;
        const token = localStorage.getItem('currentUser');
        if (token !== undefined) {
          var role = this.decodeToken.roles;
          this.decodeToken = this.authService.DecodeToken();
          if (this.decodeToken.roles === 'Administrator') {
            return (roles == null || roles.indexOf('Admin') !== -1);
          }
          if(this.decodeToken.roles === 'Mechanic'){
            return (roles == null || roles.indexOf('Mechanic') !== -1);
          }
        }
        return (roles == null || roles.indexOf('') !== -1);
    }
  public CanActiveAdmin() {
    try {
          const token = localStorage.getItem('currentUser');
          if (token !== undefined) {
            this.decodeToken = this.authService.DecodeToken();
              if (this.decodeToken.roles === 'Administrator') {
                return true;
              }
            return false;
          }
          return false;
        } catch (err) {
          return false;
        }
  }

  public CanActiveMechanic() {
    try {
          const token = localStorage.getItem('currentUser');
          if (token !== undefined) {
            this.decodeToken = this.authService.DecodeToken();
              if (this.decodeToken.roles === 'Mechanic') {
                return true;
              }
            return false;
          }
          return false;
        } catch (err) {
          return false;
        }
  }
}
