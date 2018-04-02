import { Component } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-login-facebook',
  templateUrl: './login-facebook.component.html',
  styleUrls: ['./login-facebook.component.scss']
})
export class LoginFacebookComponent {

  constructor(private userService: UserService) { }

  login() {
    this.userService.loginFacebook();
  }

}
