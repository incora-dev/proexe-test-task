import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectDashboard = createFeatureSelector<any>('dashboard');

export const selectUsers = createSelector(
  selectDashboard,
  (state: any) => state.data.users,
);
