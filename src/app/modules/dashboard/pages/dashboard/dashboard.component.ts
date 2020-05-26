import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Store } from '@ngrx/store';
import * as dashboardActions from '../../../../store/dashboard/dashboard.actions';
import { selectUsers } from 'src/app/store/dashboard/dashboard.selectors';

import { IUser } from '../../models/user.interface';
import { DeletePopupComponent } from '../../components/delete-popup/delete-popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usersList: IUser[] = [];
  isLoading = false;
  displayedColumns = ['id', 'name', 'username', 'email', 'city', 'edit', 'delete'];

  constructor(
    private store: Store<any>,
    public dialog: MatDialog,
  ) {
    this.store.select(selectUsers).subscribe((data) => {
      this.usersList = data;
    });
  }

  ngOnInit() {
    if (!this.usersList) {
      this.store.dispatch(
        dashboardActions.getUsers.request({ })
      );
    }
  }

  openDeletePopup(userId: number) {
    this.dialog
      .open(DeletePopupComponent, {
        data: userId
      })
      .afterClosed()
      .subscribe((id) => {
        if (id) {
          this.store.dispatch(
            dashboardActions.deleteUser.request({ id })
          );
        }
      });
  }

}
