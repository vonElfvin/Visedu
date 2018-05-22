import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { Student } from './student.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class StudentService {

  private readonly COLLECTION: string = 'students';
  private studentObservable: Observable<Student>;

  constructor(
    private httpService: HttpService<Student>,
  ) {
    this.setStudent2();
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

  createStudent(studentData, user) {
    const student: Student = {
      _id: user._id,
      user: user._id,
      classCode: studentData.classCode,
    };
    return this.httpService.post(this.COLLECTION, student);
  }

  setStudent2() {
    // this.studentObservable = this.userService.user.switchMap(user => {
    //   console.log(user);
    //   if (user) {
    //     this.studentObservable = this.httpService.get(this.COLLECTION, user._id);
    //   } else {
    //     this.studentObservable = Observable.of(null);
    //   }
    // });
  }

  setStudent(userId: string) {
    this.studentObservable = this.httpService.get(this.COLLECTION, userId);
  }
}
