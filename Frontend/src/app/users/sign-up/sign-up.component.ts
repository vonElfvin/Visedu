import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ALPHABET_PATTERN, EMAIL_PATTERN, PHONE_PATTERN } from '../../shared/shared.constants';
import { PasswordValidators } from '../../shared/validators/password.validators';
import { Role } from '../shared/user.model';
import { ClassService } from '../../classes/shared/class.service';
import { invalidClassCodeValidator } from '../../shared/validators/class-code.validators';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackType } from '../../core/feedback/feedback.model';
import { FeedbackService } from '../../core/feedback/feedback.service';
import { StudentService } from '../../students/shared/student.service';
import { TeacherService } from '../../teachers/shared/teacher.service';

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
      ], [invalidClassCodeValidator(this.classService)]
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
    private teacherService: TeacherService,
    private studentService: StudentService,
    private classService: ClassService,
    private route: ActivatedRoute,
    private feedbackService: FeedbackService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.classCode.setValue(this.route.snapshot.queryParams.classCode);
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

  set classCode(classCode) {
    this.classCode.setValue(classCode);
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

  signUp() {
    // user
    const user = {
      ...this.userForm.value,
      ...this.loginForm.value,
    };

    // student
    if (user.role === Role.student) {
      const student = this.studentForm.value;
      this.studentService.createStudentUser(student, user).subscribe(() => {
        this.signUpFeedback(FeedbackType.Success, 'create-student-success');
      }, () => {
        this.signUpFeedback(FeedbackType.Error, 'create-student-error');
      });

    // teacher
    } else if (user.role === Role.teacher) {
      const teacher = this.teacherForm.value;
      this.teacherService.createTeacherUser(teacher, user).subscribe(() => {
        this.signUpFeedback(FeedbackType.Success, 'create-teacher-success');
        this.router.navigate(['logga-in']);
      }, () => {
        this.signUpFeedback(FeedbackType.Error, 'create-teacher-error');
      });
    }
  }

  private signUpFeedback(type: FeedbackType, message: string) {
    this.feedbackService.openSnackbar({type: type, message: message});
  }
}
