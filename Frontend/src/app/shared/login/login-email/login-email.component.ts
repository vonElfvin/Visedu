import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.scss']
})
export class LoginEmailComponent {

  emailAndPasswordForm = new FormGroup({
    email: new FormControl('',
      [Validators.required],
    ),
    password: new FormControl('',
      [Validators.required],
    ),
  });

  constructor(private authService: AuthService) { }

  get form() {
    return this.emailAndPasswordForm;
  }

  get email() {
    return this.form.get('email').value;
  }

  get password() {
    return this.form.get('password').value;
  }

  login() {
    this.authService.loginEmailAndPassword(this.email, this.password);
  }
}
