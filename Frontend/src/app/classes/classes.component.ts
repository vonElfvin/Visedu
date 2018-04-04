import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teachers/shared/teacher.service';
import { ClassService } from './shared/class.service';
import { Class } from './shared/class.model';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  classes: Class[];

  constructor(
    private teacherService: TeacherService,
    private classService: ClassService,
  ) { }

  ngOnInit() {
    this.teacherService.teacher.subscribe(teacher => {
      this.classService.getTeacherClasses(teacher._id).subscribe(classes => {
        this.classes = classes;
      });
    });
  }

}
