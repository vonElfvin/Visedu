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
      case 'guard-admin':
        result = 'Endast admin kommer åt den sidan.';
        break;
      case 'create-class-success':
        result = 'Nytt klassrum skapat.';
        break;
      case 'create-class-error':
        result = 'Kunde inte skapa nytt klassrum.';
        break;
      case 'create-student-success':
        result = 'Nytt studentkonto skapat.';
        break;
      case 'create-student-error':
        result = 'Kunde inte skapa nytt studentkonto.';
        break;
      case 'create-teacher-success':
        result = 'Nytt lärarkonto skapat.';
        break;
      case 'create-teacher-error':
        result = 'Kunde inte skapa nytt lärarkonto.';
        break;
      case 'add-problem-success':
        result = 'Problem skapats.';
        break;
      case 'add-problem-error':
        result = 'Problem kunde inte skapas, var vänlig försök igen.';
        break;
      case 'delete-problem-success':
        result = 'Problem raderats.';
        break;
      case 'delete-problem-error':
        result = 'Problem kunde inte raderas, var vänlig försök igen.';
        break;
      case 'update-problem-success':
        result = 'Problem uppdaterat.';
        break;
      case 'update-problem-error':
        result = 'Problem kunde inte uppdateras, var vänlig försök igen.';
        break;
      case 'edit-class':
        result = 'Klassrummet har redigerats.';
        break;
      case 'edit-class-fail':
        result = 'Kunde inte redigera klassrummet.';
        break;
      case 'delete-class':
        result = 'Klassrummet har raderats.';
        break;
      case 'delete-class-fail':
        result = 'Kunde inte radera klassrummet.';
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
