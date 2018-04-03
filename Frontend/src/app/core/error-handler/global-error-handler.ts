import { ErrorHandler, Injectable} from '@angular/core';
import * as firebase from 'firebase';
import { Feedback, FeedbackType } from '../feedback/feedback.model';
import { FeedbackService } from '../feedback/feedback.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private feedbackService: FeedbackService
  ) { }

  handleError(error: HttpErrorResponse) {

    // client error
    if (error.error instanceof ErrorEvent) {
      console.log('Client error occured: ', error.error.message);

    // server error
    } else {
      console.log('Server error occured: ', error.status, error.error);

      switch (error.status) {
        case(404):
          // handle 404 error
          break;
        case(500):
          // handle 500 error
          break;
        default:
      }
    }
    return new ErrorObservable(error);
  }

  errorFeedback(error: firebase.auth.Error) {
    console.log(error);
    const feedback: Feedback = {type: FeedbackType.Error};
    switch (error.code) {
      case 'auth/email-already-in-use':
        feedback.message = 'Det finns redan ett konto med den e-mailadressen.';
        break;
      case 'auth/invalid-email':
        feedback.message = 'Felaktig e-mailaddress.';
        break;
      case 'auth/weak-password':
        feedback.message = 'För svagt lösenord.';
        break;
      case 'auth/user-disabled':
        feedback.message = 'Användaren är avstängd.';
        break;
      case 'auth/user-not-found':
        feedback.message = 'Finns ingen användare med den e-mailaddressen.';
        break;
      case 'auth/wrong-password':
        feedback.message = 'Felaktigt lösenord.';
        break;
    }
    this.feedbackService.openSnackbar(feedback);
  }
}
