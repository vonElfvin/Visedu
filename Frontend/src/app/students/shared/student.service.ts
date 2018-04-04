import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { Student } from './student.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {

  private readonly path: string = 'students';
  student: Observable<Student>;

  constructor(private httpService: HttpService<Student>) { }

  getStudents(): Observable<Student[]> {
    return this.httpService.list(this.path);
  }

  createStudent(studentData, user) {
    const student: Student = {
      _id: user._id,
      classCode: studentData.classCode,
    };
    return this.httpService.post(this.path, student);
  }
}
