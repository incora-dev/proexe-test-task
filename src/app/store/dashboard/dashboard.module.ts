import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './dashboard.reducers';
import { DashboardEffects } from './dashboard.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('dashboard', reducer),
    EffectsModule.forFeature([DashboardEffects]),
  ],
  providers: [DashboardEffects],
})
export class DashboardModule {}
