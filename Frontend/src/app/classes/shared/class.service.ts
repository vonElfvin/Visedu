import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { Class } from './class.model';
import { Observable } from 'rxjs/Observable';
import { TeacherService } from '../../teachers/shared/teacher.service';
import { Feedback, FeedbackType } from '../../core/feedback/feedback.model';
import { tap } from 'rxjs/operators';
import { FeedbackService } from '../../core/feedback/feedback.service';

@Injectable()
export class ClassService {

  private readonly COLLECTION = 'classes';
  private feedback: Feedback;
  private teacherId: string;

  classesObservable: Observable<Class[]>;

  constructor(
    private httpService: HttpService<Class>,
    private feedbackService: FeedbackService,
  ) { }

  get classes(): Observable<Class[]> {
    return this.classesObservable;
  }

  getTeacherClasses() {
    return this.httpService.list(this.COLLECTION + '?teacherId=' + this.teacherId);
  }

  setClasses(teacherId) {
    this.teacherId = teacherId;
    this.classesObservable = this.getTeacherClasses();
  }

  getClass(className: string) {
    return this.httpService.get(this.COLLECTION, `${this.teacherId}/${className}`);
  }

  createClass(classBody: Class) {
    classBody = {
      ...classBody,
      teacherId: this.teacherId,
    };
    return this.httpService.post(this.COLLECTION, classBody).subscribe(() => {
      // if success
      this.feedback = {type: FeedbackType.Success, message: 'create-class'};
      this.feedbackService.openSnackbar(this.feedback);
    }, () => {
      // if error
      this.feedback = {type: FeedbackType.Error, message: 'create-class-fail'};
      this.feedbackService.openSnackbar(this.feedback);
    });
  }
}
