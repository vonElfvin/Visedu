import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.scss']
})
export class LoginGoogleComponent {

  constructor(private authService: AuthService) { }

  login() {
    this.authService.loginGoogle();
  }

}
