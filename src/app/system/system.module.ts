import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {SidebarModule} from "./sidebar/sidebar.module";
import {FlexLayoutModule} from "@angular/flex-layout";

const routes: Routes = [
  {
    path: '', component: SystemComponent, children: [
      {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
      {path: 'corporate', loadChildren: './corporate/corporate.module#CorporateModule'},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SidebarModule,
    FlexLayoutModule
  ],
  declarations: [SystemComponent],
  bootstrap: [SystemComponent]
})
export class SystemModule {
}
