import { ErrorHandler, Injectable} from '@angular/core';
import * as firebase from 'firebase';
import { Feedback, FeedbackType } from '../feedback/feedback.model';
import { FeedbackService } from '../feedback/feedback.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private feedbackService: FeedbackService) { }

  handleError(error: HttpErrorResponse) {
    const feedback: Feedback = {type: FeedbackType.Error};

    // client error
    if (error.error instanceof ErrorEvent) {
      feedback.message = 'Något gick fel här i klienten.';
      this.feedbackService.openSnackbar(feedback);
      console.log('Client error occured: ', error.error.message);

    // server error
    } else {
      switch (error.status) {
        case(404):
          feedback.message = '404: servern känner inte igen ditt kall.';
          break;
        case(500):
          feedback.message = '500: något gick snett på servern.';
          break;
        default:
          feedback.message = error.status + ': ' + error.error.message;
      }
      this.feedbackService.openSnackbar(feedback);
      console.log('Server error occured: ', error.status, error.error.message);
    }
    return new ErrorObservable(
      'Something bad happened; please try again later.');
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
