import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseAuthService {

  private auth;

  constructor(afAuth: AngularFireAuth) {
    this.auth = afAuth.auth;
  }

  loginGoogle() {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  loginFacebook() {
    return this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider);
  }

  loginEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
}
