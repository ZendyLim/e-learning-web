import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserIndexComponent } from './admin-user-index.component';
import {RouterModule, Routes} from "@angular/router";
import { AdminUserIndexSearchBarComponent } from './admin-user-index-search-bar/admin-user-index-search-bar.component';
import { AdminUserIndexTableComponent } from './admin-user-index-table/admin-user-index-table.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UsersService} from "../../../../services/users.service";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: AdminUserIndexComponent,
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [AdminUserIndexComponent, AdminUserIndexSearchBarComponent, AdminUserIndexTableComponent],
  bootstrap: [AdminUserIndexComponent],
  providers: [UsersService]
})
export class AdminUserIndexModule { }
