import { Injectable } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { Feedback, FeedbackType } from './feedback.model';

@Injectable()
export class FeedbackService {

  snackbarConfig: MatSnackBarConfig = new MatSnackBarConfig();

  constructor(
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    ) {
    this.snackbarConfig.duration = 2500;
  }

  openSnackbar(feedback: Feedback) {
    this.setSnackbarClass(feedback.type);
    this.setSnackbarMessage(feedback.message);
    this.snackbar.openFromComponent(SnackbarComponent, this.snackbarConfig);
  }

  setSnackbarMessage(message: string) {
    let result: string;
    switch (message) {
      case 'login':
        result = 'Du har loggats in. Välkommen!';
        break;
      case 'logout':
        result = 'Du har loggats ut.';
        break;
      case 'guard':
        result = 'Du måste logga in för att komma åt den sidan.';
        break;
      case 'guard-teacher':
        result = 'Endast lärare kommer åt den sidan.';
        break;
      case 'guard-student':
        result = 'Endast studenter kommer åt den sidan.';
        break;
      case 'create-class':
        result = 'Nytt klassrum skapat.';
        break;
      case 'create-class-fail':
        result = 'Kunde inte skapa nytt klassrum.';
        break;
      default:
        result = message;
        break;
    }
    this.snackbarConfig.data = {message: result};
  }

  setSnackbarClass(type: FeedbackType) {
    switch (type) {
      case FeedbackType.Success: {
        this.snackbarConfig.panelClass = ['successSnackbar'];
        break;
      }
      case FeedbackType.Error: {
        this.snackbarConfig.panelClass = ['errorSnackbar'];
        break;
      }
    }
  }

  openConfirmDialog(title: string, cancel: string, confirm: string) {
    return this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: title,
          cancel: cancel,
          confirm: confirm,
        }
      }
    ).afterClosed(); // returns Observable.of(true or undefined)
  }

}
