import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as dashboardAction from './dashboard.actions';

import { UsersService } from 'src/app/modules/dashboard/services/users.service';

@Injectable()
export class DashboardEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private usersService: UsersService,
  ) { }

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dashboardAction.getUsers.request),
      mergeMap(() =>
        this.usersService.getUsersList()
          .pipe(
            map((users) => dashboardAction.getUsers.success({ users }),
            catchError((error) => {
              return of(dashboardAction.getUsers.failure({ error }));
            })
          )
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dashboardAction.deleteUser.request),
      mergeMap((action: { id }) =>
        this.usersService.deleteUser(action.id)
          .pipe(
            map(() => dashboardAction.deleteUser.success({ id: action.id }),
            catchError((error) => {
              return of(dashboardAction.deleteUser.failure({ error }));
            })
          )
        )
      )
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dashboardAction.addUser.request),
      mergeMap((action: { newUser }) =>
        this.usersService.createUser(action.newUser)
          .pipe(
            map(() => {
              const newUser = {
                ...action.newUser,
                id: Math.trunc(Math.random() * 100000)
              };
              this.router.navigate(['/']);
              return dashboardAction.addUser.success({ newUser });
            }),
            catchError((error) => {
              return of(dashboardAction.addUser.failure({ error }));
            })
          )
      )
    )
  );

}
