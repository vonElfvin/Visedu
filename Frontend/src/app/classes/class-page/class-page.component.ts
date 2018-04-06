import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../shared/class.model';
import { ClassService } from '../shared/class.service';
import { Observable } from 'rxjs/Observable';

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
  ) {
    const className = route.snapshot.params['className'];
    this.class = this.classService.getClass(className);
  }

  ngOnInit() {
  }

}
