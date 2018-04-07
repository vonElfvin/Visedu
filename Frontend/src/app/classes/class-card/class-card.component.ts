import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../shared/class.model';
import { FeedbackService } from '../../core/feedback/feedback.service';
import { ClassService } from '../shared/class.service';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss']
})
export class ClassCardComponent implements OnInit {

  @Input() class: Class;

  constructor(
    private feedbackService: FeedbackService,
    private classService: ClassService,
  ) { }

  ngOnInit() {
  }

  delete() {
    this.feedbackService.openConfirmDialog(
      `Är du säker på att du vill radera klass ${this.class.name}?`,
      'Avbryt',
      'Ja'
    ).subscribe(confirm => {
      if (confirm) {
        this.classService.deleteClass(this.class._id);
      }
    });
  }

}
