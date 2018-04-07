import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from '../shared/class.service';

@Component({
  selector: 'app-class-option',
  templateUrl: './class-option.component.html',
  styleUrls: ['./class-option.component.scss']
})
export class ClassOptionComponent implements OnInit {

  routeArray: string[];

  constructor(
    private router: Router,
    private classService: ClassService,
  ) { }

  ngOnInit() {
    this.setRouteArray();
    this.router.events.subscribe(() => {
      this.setRouteArray();
    });
  }

  setRouteArray() {
    this.routeArray = this.router.url.split('/').splice(1);
  }

  navigate(className: string) {
    this.classService.getClassWithName(className).subscribe(c => {
      this.router.navigate(
        ['skapa-konto'],
        {
          queryParams: {classCode: c.code},
        }
      );
    });
  }
}
