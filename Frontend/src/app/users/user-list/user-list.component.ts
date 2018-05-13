import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/user.model';
import { FeedbackService } from '../../core/feedback/feedback.service';
import { FeedbackType } from '../../core/feedback/feedback.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;
  displayedColumns = ['name', 'email', 'role', 'id', 'uid', 'action'];

  constructor(
    private userService: UserService,
    private feedbackService: FeedbackService,
  ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  deleteUser(uid) {
    this.feedbackService.openConfirmDialog(
      'Är du säker på att du vill radera detta konto?',
      'Avbryt',
      'Ja',
    ).subscribe(confirm => {
      if (confirm) {
        this.userService.deleteUser(uid).subscribe(() => {
          this.feedbackService.openSnackbar({type: FeedbackType.Success, message: 'user-delete-success'});
          this.users = this.userService.getUsers();
        }, () => {
          this.feedbackService.openSnackbar({type: FeedbackType.Error, message: 'user-delete-error'});
        });
      }
    });
  }
}
