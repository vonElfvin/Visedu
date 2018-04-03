import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { Teacher } from './teacher.model';

@Injectable()
export class TeacherService {

  private readonly path: string = 'teachers';

  constructor(private httpService: HttpService<Teacher>) { }

  createTeacher(teacherData, user) {
    const teacher: Teacher = {
      _id: user._id,
      phone: teacherData.phone,
    };
    return this.httpService.post(this.path, teacher);
  }
}
