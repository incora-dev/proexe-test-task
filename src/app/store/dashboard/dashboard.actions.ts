import { createActionType } from './../effectsHelper';

import { createAction, props } from '@ngrx/store';

import { IUser } from 'src/app/modules/dashboard/models/user.interface';

const GET_USERS = createActionType('[DASHBOARD] getUsers');
const ADD_USER = createActionType('[DASHBOARD] addUser');
const EDIT_USER = createActionType('[DASHBOARD] editUser');
const DELETE_USER = createActionType('[DASHBOARD] deleteUser');

export const getUsers = {
  request: createAction(GET_USERS.REQUEST, props<{ }>()),
  success: createAction(GET_USERS.SUCCESS, props<{ users: IUser[] }>()),
  failure: createAction(GET_USERS.FAILURE, props<{ error: string }>()),
};

export const addUser = {
  request: createAction(ADD_USER.REQUEST, props<{ newUser: Partial<IUser> }>()),
  success: createAction(ADD_USER.SUCCESS, props<{ newUser: Partial<IUser> }>()),
  failure: createAction(ADD_USER.FAILURE, props<{ error: string }>()),
};

export const editUser = {
  request: createAction(EDIT_USER.REQUEST, props<{ id: string }>()),
  success: createAction(EDIT_USER.SUCCESS, props<{ }>()),
  failure: createAction(EDIT_USER.FAILURE, props<{ error: string }>()),
};

export const deleteUser = {
  request: createAction(DELETE_USER.REQUEST, props<{ id: string }>()),
  success: createAction(DELETE_USER.SUCCESS, props<{ id: string }>()),
  failure: createAction(DELETE_USER.FAILURE, props<{ error: string }>()),
};
