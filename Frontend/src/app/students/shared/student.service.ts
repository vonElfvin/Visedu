import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { Student } from './student.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {

  private readonly COLLECTION: string = 'students';
  studentObservable: Observable<Student>;

  constructor(private httpService: HttpService<Student>) { }

  get student() {
    return this.studentObservable;
  }

  getStudents(classCode: string): Observable<Student[]> {
    return this.httpService.list(`${this.COLLECTION}?classCode=${classCode}`);
  }

  createStudent(studentData, user) {
    const student: Student = {
      user: user._id,
      classCode: studentData.classCode,
    };
    return this.httpService.post(this.COLLECTION, student);
  }

  setStudent(id: string) {
    this.studentObservable = this.httpService.get(this.COLLECTION, id);
  }
}
