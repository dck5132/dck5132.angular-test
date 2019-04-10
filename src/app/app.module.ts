import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { AppLoadModule } from './app-load/app-load.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AssetsComponent } from './assets/assets.component';

import { AuthenticationService } from './authentication.service';
import { AuthguardService } from './auth-guard.service';
import { AssetService } from './asset.service';
import { AssetComponent } from './asset/asset.component';


const check = true;
const appRoutes: Routes = [
   { path: '', component: WelcomeComponent},
   { path: 'assets', component: AssetsComponent, canActivate: [AuthguardService] },
   { path: 'assets/:name', component: AssetComponent, canActivate: [AuthguardService] }
 ];
 
 let dev = [
  LoginModule
];
  
if(!check) {
  dev = [];
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AssetsComponent,
    AssetComponent,
  ],
  imports: [
    AppLoadModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
    dev,
    SharedModule
  ],
  providers: [AuthenticationService, AuthguardService, AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

