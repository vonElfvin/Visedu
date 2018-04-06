import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input() classCode: string;

  private students: any[];

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
