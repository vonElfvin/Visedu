import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login-facebook',
  templateUrl: './login-facebook.component.html',
  styleUrls: ['./login-facebook.component.scss']
})
export class LoginFacebookComponent {

  constructor(private authService: AuthService) { }

  login() {
    this.authService.loginFacebook();
  }

}
