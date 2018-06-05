import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {AdminModule} from "./admin/admin.module";

const routes: Routes = [
  {
    path: '', component: SystemComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    AdminModule
  ],
  declarations: [SystemComponent]
})

export class SystemModule {

}
