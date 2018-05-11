import { Injectable } from '@angular/core';
import { Problem } from './problem.model';
import { FirebaseDatabaseService } from '../../core/firebase/firebase-database/firebase-database.service';
import { FeedbackService } from '../../core/feedback/feedback.service';
import { Feedback, FeedbackType } from '../../core/feedback/feedback.model';

@Injectable()
export class ProblemService {

  private readonly COLLECTION_PATH = 'problems';
  private feedback: Feedback = {};

  constructor(
    private firebaseDatabaseService: FirebaseDatabaseService<Problem>,
    private feedbackService: FeedbackService,
  ) { }

  createProblem(problem: Problem) {
    this.firebaseDatabaseService.insert(this.COLLECTION_PATH, problem).then(() => {
        this.feedback.type = FeedbackType.Success;
        this.feedback.message = 'add-problem-success';
        this.feedbackService.openSnackbar(this.feedback);
      }
    ).catch(err => {
      this.feedback.type = FeedbackType.Error;
      this.feedback.message = 'add-problem-error';
      this.feedbackService.openSnackbar(this.feedback);
    });
  }

  getProblems() {
    return this.firebaseDatabaseService.list(this.COLLECTION_PATH);
  }

}
