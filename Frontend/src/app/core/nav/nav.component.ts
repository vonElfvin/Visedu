import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback/feedback.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(public authService: AuthService) { }

}
