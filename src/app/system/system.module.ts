import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';

const routes: Routes = [
  {
      path: '',
      component: SystemComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
  ],
  declarations: [SystemComponent],
  bootstrap: [SystemComponent]
})
export class SystemModule { }
