import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
  DashboardComponent],
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
})
export class DashboardModule { }
