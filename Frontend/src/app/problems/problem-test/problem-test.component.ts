import { Component, Input } from '@angular/core';
import { Problem } from '../shared/problem.model';
import { FeedbackService } from '../../core/feedback/feedback.service';
import { CompletedProblemService } from '../shared/completed-problem.service';
import { FeedbackType } from '../../core/feedback/feedback.model';
import { hexColors, matColors } from '../shared/problem.data.ts';

@Component({
  selector: 'app-problem-test',
  templateUrl: './problem-test.component.html',
  styleUrls: ['./problem-test.component.scss']
})
export class ProblemTestComponent {

  @Input() problem: Problem;
  answer: string;

  hexColors = hexColors;
  matColors = matColors;

  constructor(
    private feedbackService: FeedbackService,
    private completedProblemService: CompletedProblemService,
  ) {
  }

  submitAnswer() {
    if (this.answer === this.problem.answer) {
      this.feedbackService.openSnackbar({type: FeedbackType.Success, message: 'problem-answer-correct'});
      this.completedProblemService.addCompletedProblem(this.problem);
    } else {
      this.feedbackService.openSnackbar({type: FeedbackType.Error, message: 'problem-answer-wrong'});
    }
  }
}
