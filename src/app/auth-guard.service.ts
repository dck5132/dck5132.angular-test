import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthguardService implements CanActivate {
  token: string = localStorage.getItem('tk');
  constructor(private authentication: AuthenticationService) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.authentication.isAuthenticated(this.token);
    }
}
