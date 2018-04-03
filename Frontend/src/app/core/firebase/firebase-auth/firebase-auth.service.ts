import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { FeedbackService } from '../../feedback/feedback.service';
import { Feedback, FeedbackType } from '../../feedback/feedback.model';
import { GlobalErrorHandler } from '../../error-handler/global-error-handler';

@Injectable()
export class FirebaseAuthService {

  private auth;

  constructor(
    afAuth: AngularFireAuth,
    private feedbackService: FeedbackService,
    private errorHandler: GlobalErrorHandler,
    ) {
    this.auth = afAuth.auth;
  }

  loginProvider(provider: firebase.auth.AuthProvider) {
    return this.auth.signInWithPopup(provider);
  }

  loginGoogle() {
    return this.loginProvider(new firebase.auth.GoogleAuthProvider);
  }

  loginFacebook() {
    return this.loginProvider(new firebase.auth.FacebookAuthProvider);
  }

  loginEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password).catch(err => {
      this.errorHandler.errorFeedback(err);
      throw err;
    });
  }

  createAccountWithAndPassword(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password).catch(err => {
      this.errorHandler.errorFeedback(err);
      throw err;
    });
  }

  deleteUser() {
    console.log('raderar');
    return firebase.auth().currentUser.delete().then(success => {
      console.log('raderat');
    }).catch(er => {
      console.log('raderade inte ett skit');
    });
  }

}
