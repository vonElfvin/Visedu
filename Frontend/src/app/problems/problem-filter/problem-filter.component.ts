import { Component, Input, OnInit } from '@angular/core';
import { Filter } from '../shared/filter.model';

@Component({
  selector: 'app-problem-filter',
  templateUrl: './problem-filter.component.html',
  styleUrls: ['./problem-filter.component.scss']
})
export class ProblemFilterComponent {

  @Input() filterOptions: Filter[];

  constructor() { }

}
