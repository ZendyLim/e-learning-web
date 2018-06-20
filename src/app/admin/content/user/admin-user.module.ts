import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserComponent } from './admin-user.component';
import {RouterModule, Routes} from "@angular/router";
import {AdminUserService} from "./admin-user.service";
import {HttpClientModule} from "@angular/common/http";
import { AdminUserAddButtonComponent } from './add-button/admin-user-add-button.component';
import { AdminUserAddModalComponent } from './add-modal/admin-user-add-modal.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatProgressSpinnerModule
} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import { AdminUserTableRowComponent } from './table-row/admin-user-table-row.component';

const routes: Routes = [
  {
    path: '',
    component: AdminUserComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [AdminUserService],
  declarations: [AdminUserComponent, AdminUserAddButtonComponent, AdminUserAddModalComponent, AdminUserTableRowComponent],
  bootstrap: [AdminUserComponent],
  entryComponents: [AdminUserAddModalComponent]
})
export class AdminUserModule { }
