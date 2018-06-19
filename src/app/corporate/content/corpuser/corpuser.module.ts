import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorpuserComponent } from './Corpuser.component';
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
    component: CorpuserComponent,
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
  declarations: [CorpuserComponent, EditModuleComponent],
  bootstrap: [CorpuserComponent],
  entryComponents: [EditModuleComponent]
})
export class CorpuserModule { }
