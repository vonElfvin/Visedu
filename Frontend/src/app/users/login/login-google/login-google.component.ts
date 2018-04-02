import { Component } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.scss']
})
export class LoginGoogleComponent {

  constructor(private userService: UserService) { }

  login() {
    this.userService.loginGoogle();
  }

}
