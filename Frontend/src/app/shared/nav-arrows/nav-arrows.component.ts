import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-arrows',
  templateUrl: './nav-arrows.component.html',
  styleUrls: ['./nav-arrows.component.scss']
})
export class NavArrowsComponent implements OnInit {

  routeArray: string[];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.setRouteArray();
    this.router.events.subscribe(() => {
      this.setRouteArray();
    });
  }

  navigate(index: number) {
    if (index !== this.routeArray.length - 1) {
      this.router.navigate([this.routeArray.splice(0, index + 1).join('/')]);
    }

  }

  setRouteArray() {
    this.routeArray = this.router.url.split('/').splice(1);
  }
}
