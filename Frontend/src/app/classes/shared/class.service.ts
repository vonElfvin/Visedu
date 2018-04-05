import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { Class } from './class.model';
import { Observable } from 'rxjs/Observable';
import { TeacherService } from '../../teachers/shared/teacher.service';

@Injectable()
export class ClassService {

  private readonly COLLECTION = 'classes';

  classesObservable: Observable<Class[]>;

  constructor(
    private httpService: HttpService<Class>,
  ) { }

  get classes(): Observable<Class[]> {
    return this.classesObservable;
  }

  getTeacherClasses(teacherId: string) {
    return this.httpService.list(this.COLLECTION + '?teacherId=' + teacherId);
  }

  setClasses(teacherId) {
      this.classesObservable = this.getTeacherClasses(teacherId);
  }

  getClass(code: string) {
    return this.httpService.get(this.COLLECTION, code);
  }
}
