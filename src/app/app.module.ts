import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

// import { MatButtonModule } from '@angular/material/button';
// import { MatListModule } from '@angular/material/list';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSelectModule } from '@angular/material/select';
// import { MatCardModule } from '@angular/material/card';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatTreeModule } from '@angular/material/tree';
// import { MatIconModule } from '@angular/material/icon';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
// import { MatTableModule } from '@angular/material/table';

const appRoutes: Routes = [
  { path: '', loadChildren: './system/system.module#SystemModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
