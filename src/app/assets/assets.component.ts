import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { AuthguardService } from '../auth-guard.service';
import { AssetService } from '../asset.service';

import { Injectable } from '@angular/core';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
@Injectable()
export class AssetsComponent implements OnInit {
  trucks = [];
  constructor(
    private http: Http,
    private router: Router,
    private authentication: AuthenticationService,
    private assets: AssetService
    ) { }

  ngOnInit() {
    this.onLoad();
  }
 
 onLoad(){
      var token = localStorage.getItem('tk');
      var url = 'http://ionxlive.net/api2/api/Asset?token='+token;
      
    
      this.assets.getAssets(url).
      subscribe(
        (trucks: any[]) => { this.trucks = trucks;
         //this.router.navigate(['/assets']);
      },
        (error) => console.log ('Something went wrong')
        );
  }
  
}
