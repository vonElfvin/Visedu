import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../../users/shared/user.service';
import { User } from '../../users/shared/user.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user: Observable<User>;
  isAdmin: Observable<boolean>;
  isTeacher: Observable<boolean>;
  isStudent: Observable<boolean>;

  constructor(
    public authService: AuthService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.isAdmin = this.userService.isAdminObservable;
    this.isTeacher = this.userService.isTeacherObservable;
    this.isStudent = this.userService.isStudentObservable;
  }

}
