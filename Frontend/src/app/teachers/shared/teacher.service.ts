import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { Teacher } from './teacher.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserService } from '../../users/shared/user.service';

@Injectable()
export class TeacherService {

  private readonly COLLECTION: string = 'teachers';
  private teacherObservable: Observable<Teacher>;

  constructor(
    private httpService: HttpService<Teacher>,
    private userService: UserService,
  ) {
    this.setTeacher();
  }

  get teacher(): Observable<Teacher> {
    return this.teacherObservable;
  }

  createTeacherUser(teacherData, userData) {
    return this.userService.createUser(userData).switchMap(user => {
      return this.createTeacher(teacherData, user);
    });
  }

  createTeacher(teacherData, user) {
    const teacher: Teacher = {
      _id: user._id,
      phone: teacherData.phone,
    };
    return this.httpService.post(this.COLLECTION, teacher);
  }

  setTeacher() {
    // set teacher via user observable
    this.teacherObservable = this.userService.user.switchMap(user => {
      if (user && this.userService.isTeacher(user)) {
        return this.httpService.get(this.COLLECTION, user._id);
      } else {
        return Observable.of(null);
      }
    });
  }
}
