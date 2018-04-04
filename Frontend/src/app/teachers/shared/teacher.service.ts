import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { Teacher } from './teacher.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeacherService {

  private readonly COLLECTION: string = 'teachers';
  private teacherObservable: Observable<Teacher>;

  constructor(private httpService: HttpService<Teacher>) { }

  get teacher(): Observable<Teacher> {
    return this.teacherObservable;
  }

  createTeacher(teacherData, user) {
    const teacher: Teacher = {
      _id: user._id,
      phone: teacherData.phone,
    };
    return this.httpService.post(this.COLLECTION, teacher);
  }

  setTeacher(id: string) {
    this.teacherObservable = this.httpService.get(this.COLLECTION, id);
  }
}
