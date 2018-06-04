import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserIndexComponent } from './admin-user-index.component';
import {RouterModule, Routes} from "@angular/router";
import { AdminUserIndexSearchBarComponent } from './admin-user-index-search-bar/admin-user-index-search-bar.component';
import { AdminUserIndexTableComponent } from './admin-user-index-table/admin-user-index-table.component';
import {
  MatButtonModule,
  MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UsersService} from "../../../../services/users.service";
import {HttpClientModule} from "@angular/common/http";
import { AdminUserIndexAddComponent } from './admin-user-index-add/admin-user-index-add.component';
import {ReactiveFormsModule} from "@angular/forms";

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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [AdminUserIndexComponent, AdminUserIndexSearchBarComponent, AdminUserIndexTableComponent, AdminUserIndexAddComponent],
  bootstrap: [AdminUserIndexComponent],
  providers: [UsersService],
  entryComponents: [AdminUserIndexAddComponent]
})
export class AdminUserIndexModule { }
