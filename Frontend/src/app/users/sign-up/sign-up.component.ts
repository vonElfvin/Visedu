import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ALPHABET_PATTERN, EMAIL_PATTERN, PHONE_PATTERN } from '../../shared/shared.constants';
import { PasswordValidators } from '../../shared/validators/password.validators';
import { ClassCodeValidators } from '../../shared/validators/class-code.validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl('',
      [
        Validators.required,
        Validators.pattern(ALPHABET_PATTERN),
        Validators.minLength(2),
      ],
    ),
    lastName: new FormControl('',
      [
        Validators.required,
        Validators.pattern(ALPHABET_PATTERN),
        Validators.minLength(2),
      ],
    ),
    role: new FormControl('student',
      [
        Validators.required,
      ],
    ),
  });

  studentForm = new FormGroup({
    classCode: new FormControl('',
      [
        Validators.required,
        Validators.minLength(2),
      ], [ClassCodeValidators.invalidClassCode]
    ),
  });

  teacherForm = new FormGroup({
    phone: new FormControl('',
      [
        Validators.required,
        Validators.pattern(PHONE_PATTERN),
      ],
    ),
  });

  loginForm = new FormGroup({
    email: new FormControl('',
      [
        Validators.required,
        Validators.pattern(EMAIL_PATTERN),
      ],
    ),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(8),
      ],
    ),
    repeat: new FormControl('',
      [Validators.required],
    ),
  }, PasswordValidators.passwordsDoNotMatch);

  constructor(
  ) { }

  ngOnInit() {
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get role() {
    return this.userForm.get('role');
  }

  get classCode() {
    return this.studentForm.get('classCode');
  }

  get phone() {
    return this.teacherForm.get('phone');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get repeat() {
    return this.loginForm.get('repeat');
  }
}
