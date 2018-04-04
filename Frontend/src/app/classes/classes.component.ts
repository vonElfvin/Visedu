import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from '../teachers/shared/teacher.model';
import { TeacherService } from '../teachers/shared/teacher.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  teacher: Teacher;

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherService.teacher.subscribe(teacher => {
      this.teacher = teacher;
      console.log(teacher);
    });
  }

}
