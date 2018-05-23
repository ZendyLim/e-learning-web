import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
      path: '',
      component: LoginComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),    
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [LoginComponent],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
