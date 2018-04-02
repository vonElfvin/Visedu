import { Injectable } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Injectable()
export class UserService {

  constructor(private authService: AuthService) { }

  loginGoogle() {
    return this.authService.loginGoogle();
  }

  loginFacebook() {
    return this.authService.loginFacebook();
  }

  loginEmailAndPassword(email, password) {
    return this.authService.loginEmailAndPassword(email, password)
  }
}
