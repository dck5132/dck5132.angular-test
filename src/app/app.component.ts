import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { Router, NavigationEnd} from '@angular/router';

import { AuthguardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public router: Router,
    private authentication: AuthenticationService,
    private authguard: AuthguardService
    ) {
      this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
    }
  
  title = `IONX`;
}
