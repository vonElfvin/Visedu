import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../shared/class.model';
import { ClassService } from '../shared/class.service';
import { Observable } from 'rxjs/Observable';
import { TeacherService } from '../../teachers/shared/teacher.service';

@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.scss']
})
export class ClassPageComponent implements OnInit {

  class: Observable<Class>;

  constructor(
    private route: ActivatedRoute,
    private classService: ClassService,
    private teacherService: TeacherService,
  ) {
    const className = this.route.snapshot.params['className'];
    this.class = this.teacherService.teacher.switchMap(teacher => {
      if (teacher) {
        return this.classService.getClassWithTeacherIdAndName(teacher._id, className);
      } else {
        return Observable.of(null);
      }
    });
  }

  ngOnInit() {
  }

}
