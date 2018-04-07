import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input() classCode: string;

  students: Student[];

  constructor(
    private studentService: StudentService,
  ) { }

  ngOnInit(): void {
    this.studentService.getStudents(this.classCode).subscribe(students => {
        this.students = students;
      }
    );
  }
}
