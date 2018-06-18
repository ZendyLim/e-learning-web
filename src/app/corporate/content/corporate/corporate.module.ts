import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateComponent } from './corporate.component';
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
    component: CorporateComponent,
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
  declarations: [CorporateComponent, EditModuleComponent],
  bootstrap: [CorporateComponent],
  entryComponents: [EditModuleComponent]
})
export class CorporateModule { }
