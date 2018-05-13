import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
