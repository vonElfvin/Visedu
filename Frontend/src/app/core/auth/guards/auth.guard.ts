import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { FeedbackService } from '../../feedback/feedback.service';
import { Feedback, FeedbackType } from '../../feedback/feedback.model';

@Injectable()
export class AuthGuard implements CanActivate {

  private feedback: Feedback = {type: FeedbackType.Error, message: 'guard'};

  constructor(
    private authService: AuthService,
    private router: Router,
    private feedbackService: FeedbackService,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.feedbackService.openSnackbar(this.feedback);
    this.router.navigate(['logga-in']);
    return this.authService.isLoggedIn;
  }
}
