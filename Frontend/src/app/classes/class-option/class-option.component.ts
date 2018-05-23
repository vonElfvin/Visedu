import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from '../shared/class.service';
import { TeacherService } from '../../teachers/shared/teacher.service';

@Component({
  selector: 'app-class-option',
  templateUrl: './class-option.component.html',
  styleUrls: ['./class-option.component.scss']
})
export class ClassOptionComponent implements OnInit {

  routeArray: string[];

  constructor(
    private router: Router,
    private classService: ClassService,
    private teacherService: TeacherService,
  ) { }

  ngOnInit() {
    this.setRouteArray();
    this.router.events.subscribe(() => {
      this.setRouteArray();
    });
  }

  setRouteArray() {
    this.routeArray = this.router.url.split('/').splice(1);
  }

  navigate(className: string) {
    this.teacherService.teacher.subscribe(teacher => {
      this.classService.getClassWithTeacherIdAndName(teacher._id, className).subscribe(c => {
        this.router.navigate(
          ['skapa-konto'],
          {
            queryParams: {classCode: c.code},
          }
        );
      });
    });
  }
}
