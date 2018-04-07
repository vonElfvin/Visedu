import { Injectable } from '@angular/core';
import { FirebaseAuthService } from '../firebase/firebase-auth/firebase-auth.service';

@Injectable()
export class AuthService {

  constructor(
    private firebaseAuthService: FirebaseAuthService,
    ) { }

  get isLoggedIn() {
    return this.firebaseAuthService.isLoggedIn;
  }

  get uid() {
    return this.firebaseAuthService.uid;
  }

  get authUser() {
    return this.firebaseAuthService.authUser;
  }

  loginGoogle() {
    return this.firebaseAuthService.loginGoogle();
  }

  loginFacebook() {
    return this.firebaseAuthService.loginFacebook();
  }

  loginEmailAndPassword(email: string, password: string) {
    return this.firebaseAuthService.loginEmailAndPassword(email, password);
  }

  createAccountWithEmailAndPassword(email: string, password: string) {
    return this.firebaseAuthService.createAccountWithEmailAndPassword(email, password);
  }

  logout() {
    return this.firebaseAuthService.logout();
  }
}
