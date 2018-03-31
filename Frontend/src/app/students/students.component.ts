import { Component, OnInit } from '@angular/core';
import { StudentService } from './shared/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: any;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

}
