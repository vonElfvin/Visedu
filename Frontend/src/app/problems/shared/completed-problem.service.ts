import { Injectable } from '@angular/core';
import { FirebaseDatabaseService } from '../../core/firebase/firebase-database/firebase-database.service';
import { CompletedProblem } from './completed-problem.model';
import { StudentService } from '../../students/shared/student.service';
import { Observable } from 'rxjs/Observable';
import { Problem } from './problem.model';

@Injectable()
export class CompletedProblemService {

  private readonly COLLECTION_PATH = 'completed-problems';
  private completedProblemsObservable: Observable<CompletedProblem[]>;
  private studentId: string;

  constructor(
    private firebaseDatabaseService: FirebaseDatabaseService<CompletedProblem>,
    private studentService: StudentService,
  ) {
    this.setCompletedProblems();
  }

  get completedProblems() {
    return this.completedProblemsObservable;
  }

  getCompletedProblems(studentId: string) {
    return this.firebaseDatabaseService.list(this.COLLECTION_PATH, ref => ref
      .where('studentId', '==', studentId));
  }

  addCompletedProblem(problem: Problem) {
    const completedProblem: CompletedProblem = {
      studentId: this.studentId,
      problemId: problem._id,
    };
    return this.firebaseDatabaseService.insert(this.COLLECTION_PATH, completedProblem);
  }

  setCompletedProblems() {
    // set completed problems via student observable
    this.completedProblemsObservable = this.studentService.student.switchMap(student => {
      if (student) {
        this.studentId = student._id;
        return this.getCompletedProblems(student._id);
      } else {
        this.studentId = null;
        return Observable.of(null);
      }
    });
  }
}
