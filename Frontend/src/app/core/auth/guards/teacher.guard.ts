import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FeedbackService } from '../../feedback/feedback.service';
import { UserService } from '../../../users/shared/user.service';
import { tap } from 'rxjs/operators';
import { Feedback, FeedbackType } from '../../feedback/feedback.model';

@Injectable()
export class TeacherGuard implements CanActivate {

  feedback: Feedback = {type: FeedbackType.Error, message: 'guard-teacher'};

  constructor(
    private userService: UserService,
    private router: Router,
    private feedbackService: FeedbackService,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.isTeacherObservable.pipe(
      tap(isTeacher => {
        if (!isTeacher) {
          this.router.navigate(['logga-in']);
          this.feedbackService.openSnackbar(this.feedback);
        }
      })
    );
  }
}
