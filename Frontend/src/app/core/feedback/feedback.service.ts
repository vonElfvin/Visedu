import { Component, Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

@Injectable()
export class FeedbackService {

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    ) { }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {duration: 1500});
  }

}
