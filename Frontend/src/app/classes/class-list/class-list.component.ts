import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../shared/class.model';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  @Input() classes: Class[];

  constructor() { }

  ngOnInit() {
  }

}
