import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { Student } from './student.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { UserService } from '../../users/shared/user.service';

@Injectable()
export class StudentService {

  private readonly COLLECTION: string = 'students';
  private studentObservable: Observable<Student>;

  constructor(
    private httpService: HttpService<Student>,
    private userService: UserService,
  ) {
    this.setStudent();
  }

  get student() {
    return this.studentObservable;
  }

  getStudent(studentId: string): Observable<Student> {
    return this.httpService.get(this.COLLECTION, studentId);
  }

  getStudents(classCode: string): Observable<Student[]> {
    return this.httpService.list(`${this.COLLECTION}?classCode=${classCode}`);
  }

  createStudentUser(studentData, userData) {
    return this.userService.createUser(userData).switchMap(user => {
      return this.createStudent(studentData, user);
    });
  }

  createStudent(studentData, user) {
    const student: Student = {
      _id: user._id,
      user: user._id,
      classCode: studentData.classCode,
    };
    return this.httpService.post(this.COLLECTION, student);
  }

  setStudent() {
    // set student via user observable
    this.studentObservable = this.userService.user.switchMap(user => {
      if (user && this.userService.isStudent(user)) {
        return this.getStudent(user._id);
      } else {
        return Observable.of(null);
      }
    });
  }
}
