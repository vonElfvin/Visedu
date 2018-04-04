import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../shared/class.model';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss']
})
export class ClassCardComponent implements OnInit {

  @Input() class: Class;

  constructor() { }

  ngOnInit() {
  }

}
