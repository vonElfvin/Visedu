import { Component, Input, OnInit } from '@angular/core';
import { Problem, ProblemArea } from '../shared/problem.model';
import { ProblemService } from '../shared/problem.service';
import { FeedbackService } from '../../core/feedback/feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problem-card',
  templateUrl: './problem-card.component.html',
  styleUrls: ['./problem-card.component.scss']
})
export class ProblemCardComponent implements OnInit {

  @Input() problem: Problem;

  areas = ProblemArea;

  constructor(
    private problemService: ProblemService,
    private feedbackService: FeedbackService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  edit() {
    this.router.navigate([`admin/redigera-problem/${this.problem._id}`]);
  }

  delete() {
    this.feedbackService.openConfirmDialog(
      'Är du säker på att du vill radera problemet?',
      'Avbryt',
      'Ja').subscribe(confirm => {
        if(confirm) {
          this.problemService.deleteProblem(this.problem._id);
        }
    });
  }

}
