import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback/feedback.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.feedbackService.openSnackBar('Du har loggats ut.');
  }

}
