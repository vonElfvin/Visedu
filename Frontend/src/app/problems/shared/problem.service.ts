import { Injectable } from '@angular/core';
import { Problem, ProblemArea } from './problem.model';
import { FirebaseDatabaseService } from '../../core/firebase/firebase-database/firebase-database.service';
import { FeedbackService } from '../../core/feedback/feedback.service';
import { Feedback, FeedbackType } from '../../core/feedback/feedback.model';
import { Router } from '@angular/router';
import { Filter } from './filter.model';

@Injectable()
export class ProblemService {

  private readonly COLLECTION_PATH = 'problems';
  private feedback: Feedback = {};
  public filterOptions: Filter[] = [
    {
      name: 'Problem i kontext',
      type: ProblemArea.problem_solving,
      selected: true,
      color: 'accent'
    },
    {
      name: 'Färdighetsproblem',
      type: ProblemArea.skill_training,
      selected: true,
      color: 'primary'
    },
    {
      name: 'Kluring',
      type: ProblemArea.tricky_question,
      selected: true,
      color: 'warn'
    }
  ];

  constructor(
    private firebaseDatabaseService: FirebaseDatabaseService<Problem>,
    private feedbackService: FeedbackService,
    private router: Router,
  ) { }

  createProblem(problem: Problem) {
    this.firebaseDatabaseService.insert(this.COLLECTION_PATH, problem).then(() => {
      this.problemFeedback('add-problem-success', FeedbackType.Success);
      }
    ).catch(err => {
      console.log(err);
      this.problemFeedback('add-problem-error', FeedbackType.Error);
    });
  }

  updateProblem(id: string, problem: Problem) {
    this.firebaseDatabaseService.update(this.COLLECTION_PATH, id, problem).then(() => {
      this.problemFeedback('update-problem-success', FeedbackType.Success);
      this.router.navigate(['admin/problem-lista']);
    }
  ).catch(err => {
      console.log(err);
      this.problemFeedback('update-problem-error', FeedbackType.Error);
    });
  }

  getProblems() {
    return this.firebaseDatabaseService.list(this.COLLECTION_PATH, ref => ref.orderBy('area'));
  }

  getProblem(id: string) {
    return this.firebaseDatabaseService.get(this.COLLECTION_PATH, id);
  }

  deleteProblem(id: string) {
    this.firebaseDatabaseService.delete(this.COLLECTION_PATH, id).then(() => {
      this.problemFeedback('delete-problem-success', FeedbackType.Success);
      }
    ).catch(err => {
      console.log(err);
      this.problemFeedback('delete-problem-error', FeedbackType.Error);
    });
  }

  problemFeedback(message: string, feedbackType: FeedbackType) {
    this.feedback.type = feedbackType;
    this.feedback.message = message;
    this.feedbackService.openSnackbar(this.feedback);
  }
}
