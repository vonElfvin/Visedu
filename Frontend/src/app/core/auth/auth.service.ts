import { Injectable } from '@angular/core';
import { FirebaseAuthService } from '../firebase/firebase-auth/firebase-auth.service';

@Injectable()
export class AuthService {

  constructor(
    private firebaseAuthService: FirebaseAuthService,
    ) { }

  loginGoogle() {
    return this.firebaseAuthService.loginGoogle();
  }

  loginFacebook() {
    return this.firebaseAuthService.loginFacebook();
  }

  loginEmailAndPassword(email: string, password: string) {
    return this.firebaseAuthService.loginEmailAndPassword(email, password);
  }

}
