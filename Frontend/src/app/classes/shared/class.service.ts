import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { Class } from './class.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClassService {

  private readonly COLLECTION = 'classes';

  constructor(private httpService: HttpService<Class>) { }

  getClasses(): Observable<Class[]> {
    return this.httpService.list(this.COLLECTION);
  }

  getTeacherClasses(teacherId: string) {
    return this.httpService.list(this.COLLECTION + '?teacherId=' + teacherId);
  }
}
