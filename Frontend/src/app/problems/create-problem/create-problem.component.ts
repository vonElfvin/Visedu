import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProblemArea } from '../shared/problem.model';
import { ProblemService } from '../shared/problem.service';

@Component({
  selector: 'app-create-problem',
  templateUrl: './create-problem.component.html',
  styleUrls: ['./create-problem.component.scss']
})
export class CreateProblemComponent {

  areas = ProblemArea;

  problemForm = new FormGroup({
    question: new FormControl('',
      [Validators.required],
    ),
    answer: new FormControl('',
      [Validators.required],
    ),
    area: new FormControl(this.areas.skill_training,
      [Validators.required],
    ),
  });

  constructor(
    private problemService: ProblemService,
  ) { }

  get question() {
    return this.problemForm.get('question');
  }

  get answer() {
    return this.problemForm.get('answer');
  }

  create() {
    this.problemService.createProblem(this.problemForm.value);
  }
}
