import { Component, OnInit } from '@angular/core';

import { AuthguardService } from '../auth-guard.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'home',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor( 
    private authentication: AuthenticationService,
    private authguard: AuthguardService
    ) {}

  ngOnInit() {
  }

}
