import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-info-home',
  templateUrl: './info-home.component.html',
  styleUrls: ['./info-home.component.scss']
})
export class InfoHomeComponent implements OnInit {

  isLoggedIn = false;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

}
