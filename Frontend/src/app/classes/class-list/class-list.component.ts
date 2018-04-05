import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../shared/class.model';
import { ClassService } from '../shared/class.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  classes: Observable<Class[]>;

  constructor(private classService: ClassService) { }

  ngOnInit() {
    this.classes = this.classService.classesObservable;
  }

}
