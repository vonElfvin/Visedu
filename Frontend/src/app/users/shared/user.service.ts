import { Injectable } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Role, User } from './user.model';
import { HttpService } from '../../core/http/http.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import * as firebase from 'firebase';
import { StudentService } from '../../students/shared/student.service';
import { TeacherService } from '../../teachers/shared/teacher.service';
import { FeedbackService } from '../../core/feedback/feedback.service';
import { Feedback, FeedbackType } from '../../core/feedback/feedback.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private userObservable: Observable<User>;
  private readonly path = 'users';
  private feedback: Feedback = {};

  constructor(
    private authService: AuthService,
    private httpService: HttpService<User>,
    private studentService: StudentService,
    private teacherService: TeacherService,
    private feedbackService: FeedbackService,
  ) { }

  get user(): Observable<User> {
    return this.userObservable;
  }

  loginGoogle() {
    return this.authService.loginGoogle();
  }

  loginFacebook() {
    return this.authService.loginFacebook();
  }

  loginEmailAndPassword(email, password) {
    this.authService.loginEmailAndPassword(email, password).then((credentials) => {
      this.feedback = {type: FeedbackType.Success, message: 'login'};
      this.feedbackService.openSnackbar(this.feedback);
      this.setUser(credentials.uid);
    });
  }

  private createAccountWithAndPassword(email, password) {
    return this.authService.createAccountWithAndPassword(email, password);
  }

  createStudentUser(studentData, userData) {
    return this.createAccountWithAndPassword(userData.email, userData.password)
      .then((credentials: firebase.User) => {
        userData = {
          ...userData,
          uid: credentials.uid,
        };
        this.createUser(userData).subscribe(user => {
          return this.studentService.createStudent(studentData, user)
            .subscribe(() => {
              this.createUserSuccess(Role.student);
              this.setUser(user._id);
            });
        });
      });
  }

  createTeacherUser(teacherData, userData) {
    return this.createAccountWithAndPassword(userData.email, userData.password)
      .then((credentials: firebase.User) => {
        userData = {
          ...userData,
          uid: credentials.uid,
        };
        this.createUser(userData).subscribe(user => {
          return this.teacherService.createTeacher(teacherData, user)
            .subscribe(() => {
              this.createUserSuccess(Role.teacher);
              this.setUser(user._id);
            });
        });
      });
  }

  private getUser(id: string) {
    return this.httpService.get(this.path, id);
  }

  private setUser(id: string) {
    this.userObservable = this.getUser(id);
  }

  private createUser(userData) {
    const user: User = {
      uid: userData.uid,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      role: userData.role,
      lastLogin: + Date.now(),
    };
    return this.httpService.post(this.path, user)
      .pipe(
        catchError(this.createUserError)
      );
  }

  private createUserError(error: HttpErrorResponse) {
    firebase.auth().currentUser.delete();
    return new ErrorObservable(error);
  }

  private createUserSuccess(role: Role) {
    this.feedback.type = FeedbackType.Success;
    switch (role) {
      case Role.student:
        this.feedback.message = 'Elevkonto skapat.';
        break;
      case Role.teacher:
        this.feedback.message = 'Lärarkonto skapat.';
        break;
      default:
        this.feedback.message = 'Konto skapat.';
    }
    this.feedbackService.openSnackbar(this.feedback);
  }
}
