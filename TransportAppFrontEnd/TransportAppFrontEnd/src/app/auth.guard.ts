import {Injectable} from '@angular/core';
import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Token } from './Models/token';
import { AuthenticationService } from './services/authenticationService';
import { DecodeToken} from './Models/DecodeToken';
@Injectable() export class AuthGuard implements CanActivate {
  private decodeToken: DecodeToken;
  constructor(private router: Router, private authService: AuthenticationService) {}
  // public canActivate() {
  //   try {
  //     const token = localStorage.getItem('currentUser');
  //     if (token !== undefined) {
  //       this.decodeToken = this.authService.DecodeToken();
  //       for (const i in this.decodeToken.roles) {
  //         if (this.decodeToken.roles[i] === 'Admin') {
  //           return true;
  //         }
  //       }
  //       return true;
  //     }
  //   } catch (err) {
  //     this.router.navigate(['/Login']);
  //     return false;
  //   }
  // }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const roles = route.data['roles'] as Array<string>;
      try {
        console.log(localStorage.getItem('currentUser'));
        const token = localStorage.getItem('currentUser');
        if (token !== undefined) {
          this.decodeToken = this.authService.DecodeToken();
          // tslint:disable-next-line:forin
          for (const i in this.decodeToken.roles) {
            if (this.decodeToken.roles[i] === 'Admin') {
              return (roles == null || roles.indexOf('Admin') !== -1);
            }
            if (this.decodeToken.roles[i] === 'Mechanic') {
              return (roles == null || roles.indexOf('Mechanic') !== -1);
            }
            if (this.decodeToken.roles[i] === 'Worker') {
              return (roles == null || roles.indexOf('Worker') !== -1);
            }
          }
          // this.router.navigate(['/Login']);
          return (roles == null || roles.indexOf('') !== -1);
        }
      } catch (err) {
        // this.router.navigate(['/Login']);
        return (roles == null || roles.indexOf('') !== -1);
      }
}
  public CanActiveAdmin() {
    try {
          const token = localStorage.getItem('currentUser');
          if (token !== undefined) {
            this.decodeToken = this.authService.DecodeToken();
            for (const i in this.decodeToken.roles) {
              if (this.decodeToken.roles[i] === 'Admin') {
                return true;
              }
            }
            return true;
          }
        } catch (err) {
          return false;
        }
  }
}
