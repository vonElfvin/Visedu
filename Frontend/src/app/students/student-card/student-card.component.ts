import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {

  @Input() student: Student;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(
      [this.student.user.firstName + '-' + this.student.user.lastName],
      {
        relativeTo: this.route,
        skipLocationChange: true,
        queryParams: {studentId: this.student._id},
      }
    );
  }
}
