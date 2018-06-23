import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CorporateUserComponent} from './corporate-user.component';
import {CorporateDetailComponent} from './detail/corporate-detail.component';
import {CorporateUserAddModalComponent} from './add-modal/corporate-user-add-modal.component';
import {CorporateUserEditModalComponent} from './edit-modal/corporate-user-edit-modal.component';
import {CorporateUserAddButtonComponent} from "./add-button/corporate-user-add-button.component";
import {CorporateUserCardComponent} from "./card/corporate-user-card.component";
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatInputModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatRadioModule
} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {CorporateUserService} from "./corporate-user.service";
import {FlexLayoutModule} from "@angular/flex-layout";

const routes: Routes = [
  {
    path: '',
    component: CorporateUserComponent,
  },{
    path: ':id',
    component: CorporateDetailComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [CorporateUserService],
  declarations: [CorporateUserComponent, CorporateUserCardComponent, CorporateUserAddButtonComponent, CorporateUserAddModalComponent, CorporateUserEditModalComponent, CorporateDetailComponent],
  bootstrap: [CorporateUserComponent],
  entryComponents: [CorporateUserAddModalComponent,CorporateUserEditModalComponent]
})

export class CorporateUserModule {
}
