import { Action, createReducer, on } from '@ngrx/store';

import { initialState } from './dashboard.state';

import * as dashboardActions from './dashboard.actions';
import { IUser } from 'src/app/modules/dashboard/models/user.interface';

const createNewMerchantReducer = createReducer(
  initialState,

  on(dashboardActions.getUsers.request, (state) => ({
    ...state,
    loadings: {
      ...state.loadings,
      usersLoading: true,
    },
  })),
  on(dashboardActions.getUsers.success, (state, action) => ({
    ...state,
    data: {
      ...state.data,
      users: action.users
    },
    loadings: {
      ...state.loadings,
      usersLoading: false,
    },
  })),
  on(dashboardActions.getUsers.failure, (state) => ({
    ...state,
    loadings: {
      ...state.loadings,
      usersLoading: false,
    },
  })),

  on(dashboardActions.deleteUser.request, (state) => ({
    ...state,
    loadings: {
      ...state.loadings,
      usersLoading: true,
    },
  })),
  on(dashboardActions.deleteUser.success, (state, action) => ({
    ...state,
    data: {
      ...state.data,
      users: state.data.users.filter((user: IUser) => user.id !== +action.id)
    },
    loadings: {
      ...state.loadings,
      usersLoading: false,
    },
  })),
  on(dashboardActions.deleteUser.failure, (state) => ({
    ...state,
    loadings: {
      ...state.loadings,
      usersLoading: false,
    },
  })),

  on(dashboardActions.addUser.request, (state) => ({
    ...state,
    loadings: {
      ...state.loadings,
      usersLoading: true,
    },
  })),
  on(dashboardActions.addUser.success, (state, action) => ({
    ...state,
    data: {
      ...state.data,
      users: [
        ...state.data.users,
        action.newUser
      ]
    },
    loadings: {
      ...state.loadings,
      usersLoading: false,
    },
  })),
  on(dashboardActions.addUser.failure, (state) => ({
    ...state,
    loadings: {
      ...state.loadings,
      usersLoading: false,
    },
  })),
);

export function reducer(state, action: Action) {
  return createNewMerchantReducer(state, action);
}
