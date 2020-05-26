import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    public dialogRef: MatDialogRef<DeletePopupComponent>,
  ) { }

  ngOnInit() {
  }

  deleteUser() {
    this.dialogRef.close(this.data);
  }

}
