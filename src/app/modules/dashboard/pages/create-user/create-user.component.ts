import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as dashboardActions from '../../../../store/dashboard/dashboard.actions';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  newUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.newUserForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  createUser() {
    const newUser = {
      name: this.name.value,
      email: this.email.value
    };

    this.store.dispatch(
      dashboardActions.addUser.request({ newUser })
    );
  }

  get isSubmitDisabled(): boolean {
    return this.newUserForm && !this.newUserForm.valid;
  }

  get name(): AbstractControl { return this.newUserForm.get('name'); }
  get email(): AbstractControl { return this.newUserForm.get('email'); }

}
