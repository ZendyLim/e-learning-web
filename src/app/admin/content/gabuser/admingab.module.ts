import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmingabComponent } from './admingab.component';
import {RouterModule, Routes} from "@angular/router";
import { EditModuleComponent } from './edit-modal/edit-module.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatProgressSpinnerModule
} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: AdmingabComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  declarations: [AdmingabComponent, EditModuleComponent],
  bootstrap: [AdmingabComponent],
  entryComponents: [EditModuleComponent]
})
export class AdmingabModule { }
