import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FlexLayoutModule} from "@angular/flex-layout";

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', loadChildren: './system/system.module#SystemModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
