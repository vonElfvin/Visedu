import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {

  student: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    const studentId = this.route.snapshot.queryParams.studentId;
    this.studentService.getStudent(studentId).subscribe(student => {
      this.student = student;
    });
  }

}
