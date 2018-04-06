import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-arrows',
  templateUrl: './nav-arrows.component.html',
  styleUrls: ['./nav-arrows.component.scss']
})
export class NavArrowsComponent implements OnInit {

  @Input() routeArray: string[];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigate(index: number) {
    if (index !== this.routeArray.length - 1) {
      this.router.navigate([this.routeArray.splice(0, index + 1).join('/')]);
    }

  }
}
