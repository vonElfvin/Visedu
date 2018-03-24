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
    this.feedbackService.openSnackbar('Du har loggats ut.');
    this.feedbackService.openConfirmDialog('Logga ut?', 'Nej', 'Ja').subscribe(res => {
      console.log(res);
    });
  }

}
