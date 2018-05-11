import { Injectable } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Role, User } from './user.model';
import { HttpService } from '../../core/http/http.service';
import { catchError, map, take, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import * as firebase from 'firebase';
import { StudentService } from '../../students/shared/student.service';
import { TeacherService } from '../../teachers/shared/teacher.service';
import { FeedbackService } from '../../core/feedback/feedback.service';
import { Feedback, FeedbackType } from '../../core/feedback/feedback.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Student } from '../../students/shared/student.model';

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
  ) {
    this.setUser();
  }

  get user(): Observable<User> {
    return this.userObservable;
  }

  isStudent(user: User): boolean {
    return user.role === Role.student;
  }

  get isStudentObservable(): Observable<boolean> {
    return this.user.pipe(
      take(1),
      map(user => user && this.isStudent(user))
    );
  }

  isTeacher(user: User): boolean {
    return user.role === Role.teacher;
  }

  get isTeacherObservable(): Observable<boolean> {
    return this.user.pipe(
      take(1),
      map(user => user && this.isTeacher(user))
    );
  }

  isAdmin(user: User): boolean {
    return user.role === Role.admin;
  }

  get isAdminObservable(): Observable<boolean> {
    return this.user.pipe(
      take(1),
      map(user => user && this.isAdmin(user))
    );
  }

  loginGoogle() {
    return this.authService.loginGoogle();
  }

  loginFacebook() {
    return this.authService.loginFacebook();
  }

  loginEmailAndPassword(email, password) {
    this.authService.loginEmailAndPassword(email, password).then(() => {
      this.feedback = {type: FeedbackType.Success, message: 'login'};
      this.feedbackService.openSnackbar(this.feedback);
      this.setUser();
    });
  }

  private createAccountWithEmailAndPassword(email, password) {
    return this.authService.createAccountWithEmailAndPassword(email, password);
  }

  logout() {
    this.resetUser();
    this.authService.logout();
    this.feedback = {type: FeedbackType.Success, message: 'logout'};
    this.feedbackService.openSnackbar(this.feedback);
  }

  createStudentUser(studentData, userData) {
    return this.createAccountWithEmailAndPassword(userData.email, userData.password)
      .then((credentials: firebase.User) => {
        userData = {
          ...userData,
          uid: credentials.uid,
        };
        this.createUser(userData).subscribe(user => {
          return this.studentService.createStudent(studentData, user)
            .subscribe(() => {
              this.createUserSuccess(Role.student);
              this.setUser();
            });
        });
      });
  }

  createTeacherUser(teacherData, userData) {
    return this.createAccountWithEmailAndPassword(userData.email, userData.password)
      .then((credentials: firebase.User) => {
        userData = {
          ...userData,
          uid: credentials.uid,
        };
        this.createUser(userData).subscribe(user => {
          return this.teacherService.createTeacher(teacherData, user)
            .subscribe(() => {
              this.createUserSuccess(Role.teacher);
              this.setUser();
            });
        });
      });
  }

  getUser(id: string) {
    return this.httpService.get(this.path, id);
  }

  resetUser() {
    this.userObservable = Observable.of(null);
  }

  private setUser() {
    // set user
    this.userObservable = this.authService.authUser
      .switchMap(user => {
        if (user) {
          return this.getUser(user.uid);
        } else {
          return Observable.of(null);
        }
      }).pipe(
        tap(user => {
          if (user) {
            switch (user.role) {
              // set student
              case Role.student:
                this.studentService.setStudent(user._id);
                break;
              // set teacher
              case Role.teacher:
                this.teacherService.setTeacher(user._id);
                break;
            }
          }
        }),
      );

    // subscribe to trigger http call
    this.userObservable.subscribe(user => {
      if (user) {
        return this.getUser(user.uid);
      } else {
        return Observable.of(null);
      }
    });
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
