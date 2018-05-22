import { Component, Input, OnInit } from '@angular/core';
import { Problem, ProblemArea } from '../shared/problem.model';
import { FeedbackService } from '../../core/feedback/feedback.service';
import { CompletedProblemService } from '../shared/completed-problem.service';
import { FeedbackType } from '../../core/feedback/feedback.model';

@Component({
  selector: 'app-problem-test',
  templateUrl: './problem-test.component.html',
  styleUrls: ['./problem-test.component.scss']
})
export class ProblemTestComponent implements OnInit {

  @Input() problem: Problem;
  answer: string;

  hexColors: {[key: string]: string} = {};
  materialColors: {[key: string]: string} = {};

  constructor(
    private feedbackService: FeedbackService,
    private completedProblemService: CompletedProblemService,
  ) {
    this.hexColors[ProblemArea.problem_solving] = '#8E24AA';
    this.hexColors[ProblemArea.skill_training] = '#00897B';
    this.hexColors[ProblemArea.tricky_question] = '#F4511E';
    this.materialColors[ProblemArea.problem_solving] = 'accent';
    this.materialColors[ProblemArea.skill_training] = 'primary';
    this.materialColors[ProblemArea.tricky_question] = 'warn';
  }

  ngOnInit() {
  }

  submitAnswer() {
    if (this.answer === this.problem.answer) {
      this.completedProblemService.addCompletedProblem(this.problem._id);
      this.feedbackService.openSnackbar({type: FeedbackType.Success, message: 'problem-answer-correct'});
    } else {
      this.feedbackService.openSnackbar({type: FeedbackType.Error, message: 'problem-answer-wrong'});
    }
  }
}
