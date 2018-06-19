import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from "@angular/flex-layout";

import {AppComponent} from './app.component';
import {OverlayModule} from "@angular/cdk/overlay";
import {AlertModule} from "./alert/alert.module";
import {AlertService} from "./alert/alert.service";

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: 'corporate', loadChildren: './corporate/corporate.module#CorporateModule'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    OverlayModule,
    AlertModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
