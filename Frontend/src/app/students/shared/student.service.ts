import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { Student } from './student.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {

  private readonly path = 'students';

  constructor(private httpService: HttpService<Student>) { }

  getStudents(): Observable<Student[]> {
    return this.httpService.list(this.path);
  }
}
