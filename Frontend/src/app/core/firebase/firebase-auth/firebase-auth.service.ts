import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { FeedbackService } from '../../feedback/feedback.service';
import { GlobalErrorHandler } from '../../error-handler/global-error-handler';

@Injectable()
export class FirebaseAuthService {

  private auth;

  constructor(
    private afAuth: AngularFireAuth,
    private feedbackService: FeedbackService,
    private errorHandler: GlobalErrorHandler,
    ) {
    this.auth = this.afAuth.auth;
  }

  get uid() {
    return this.auth.currentUser.uid;
  }

  get isLoggedIn() {
    return !!this.auth.currentUser;
  }

  get authUser() {
    return this.afAuth.authState;
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

  createAccountWithEmailAndPassword(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password).catch(err => {
      this.errorHandler.errorFeedback(err);
      throw err;
    });
  }

  logout() {
    return this.auth.signOut();
  }
}
