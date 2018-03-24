import { Injectable } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

@Injectable()
export class FeedbackService {

  snackbarConfig: MatSnackBarConfig = new MatSnackBarConfig();

  constructor(
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    ) {
    this.snackbarConfig.duration = 2000;
    this.snackbarConfig.panelClass = ['snackbar'];
  }

  openSnackbar(message: string) {
    this.snackbarConfig.data = {message: message};
    this.snackbar.openFromComponent(SnackbarComponent, this.snackbarConfig);
  }

  openConfirmDialog(title: string, cancel: string, confirm: string) {
    return this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: title,
          cancel: cancel,
          confirm: confirm,
        }
      }
    ).afterClosed(); // returns subject of result: true/false
  }

}
