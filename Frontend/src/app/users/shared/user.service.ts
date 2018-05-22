import { Injectable } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Role, User } from './user.model';
import { HttpService } from '../../core/http/http.service';
import { map } from 'rxjs/operators';
import { FeedbackService } from '../../core/feedback/feedback.service';
import { FeedbackType } from '../../core/feedback/feedback.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  private userObservable: Observable<User> = Observable.of(null);
  private readonly path = 'users';

  constructor(
    private authService: AuthService,
    private httpService: HttpService<User>,
    private feedbackService: FeedbackService,
    private router: Router,
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
      map(user => user && this.isStudent(user))
    );
  }

  isTeacher(user: User): boolean {
    return user.role === Role.teacher;
  }

  get isTeacherObservable(): Observable<boolean> {
    return this.user.pipe(
      map(user => user && this.isTeacher(user))
    );
  }

  isAdmin(user: User): boolean {
    return user.role === Role.admin;
  }

  get isAdminObservable(): Observable<boolean> {
    return this.user.pipe(
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
      this.feedbackService.openSnackbar({type: FeedbackType.Success, message: 'login'});
      this.setUser();
      this.router.navigate(['']);
    });
  }

  logout() {
    this.resetUser();
    this.authService.logout();
    this.feedbackService.openSnackbar({type: FeedbackType.Success, message: 'logout'});
  }

  createUser(userData) {
    const user = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      role: userData.role,
      password: userData.password, // to create firebase account
    };
    return this.httpService.post(this.path, user);
  }

  getUser(id: string) {
    return this.httpService.get(this.path, id);
  }

  getUsers() {
    return this.httpService.list(this.path);
  }

  deleteUser(uid: string) {
    return this.httpService.delete(this.path, uid);
  }

  resetUser() {
    this.userObservable = Observable.of(null);
  }

  private setUser() {
    // set user via authUser observable
    this.userObservable = this.authService.authUser
      .switchMap(authUser => {
        if (authUser) {
          return this.getUser(authUser.uid);
        } else {
          return Observable.of(null);
        }
      });
  }
}
