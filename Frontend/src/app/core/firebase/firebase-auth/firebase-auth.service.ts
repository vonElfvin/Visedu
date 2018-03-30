import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseAuthService {

  private auth;

  constructor(
    afAuth: AngularFireAuth,
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
    return this.auth.signInWithEmailAndPassword(email, password);
  }
}
