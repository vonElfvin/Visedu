import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EMAIL_PATTERN } from '../../../shared/shared.constants';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.scss']
})
export class LoginEmailComponent {

  form = new FormGroup({
    email: new FormControl('',
      [Validators.required, Validators.pattern(EMAIL_PATTERN)],
    ),
    password: new FormControl('',
      [Validators.required],
    ),
  });

  constructor(private userService: UserService) { }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  login() {
    this.userService.loginEmailAndPassword(this.email.value, this.password.value);
  }
}
