import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { AuthguardService } from '../auth-guard.service';

import { Login } from '../login';
import { Token } from '../token';

import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  
  constructor(
    private http: Http,
    private router: Router,
    private authentication: AuthenticationService,
    ) { }

  ngOnInit() {
  }
  
    onSubmit(form: NgForm){
      const username = form.value.username;
      const password = form.value.password;
      var url = 'http://ionxlive.net/api2/api/Login?email='+username+'&password='+password;
      
      this.authentication.logCredentials(username, password, url);
    
      this.authentication.getToken(url).
      subscribe(
        (data: string) => {
         console.log('Working :' + data);
         localStorage.setItem('tk', data);
         console.log(localStorage.getItem('tk'));
         this.router.navigate(['/']);
      },
        (error) => console.log ('Something went wrong')
        );
  }
  
  sendEvent = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Click Button',
      eventLabel: 'Login',
      eventAction: 'Login Attempt',
      eventValue: 10
    });
  }
  
}
