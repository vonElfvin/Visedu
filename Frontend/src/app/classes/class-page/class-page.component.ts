import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../shared/class.model';
import { ClassService } from '../shared/class.service';
import { Observable } from 'rxjs/Observable';
import { StudentService } from '../../students/shared/student.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.scss']
})
export class ClassPageComponent implements OnInit {

  class: Class;

  constructor(
    private route: ActivatedRoute,
    private classService: ClassService,
  ) {
    const className = this.route.snapshot.params['className'];
    this.classService.getClassWithName(className).subscribe(c => {
      this.class = c;
    });
  }

  ngOnInit() {
  }

}
