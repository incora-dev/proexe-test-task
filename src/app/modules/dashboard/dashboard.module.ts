import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DeletePopupComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    DashboardRoutingModule
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: [] }],
  entryComponents: [
    DeletePopupComponent,
  ]
})
export class DashboardModule { }
