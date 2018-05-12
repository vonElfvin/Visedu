import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Problem, ProblemArea } from '../shared/problem.model';
import { ProblemService } from '../shared/problem.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-problem',
  templateUrl: './create-problem.component.html',
  styleUrls: ['./create-problem.component.scss']
})
export class CreateProblemComponent implements OnInit {

  areas = ProblemArea;

  problemId: string;

  problem: Problem;

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
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.problemId  = this.router.snapshot.params['problemId'];
    if (this.problemId) {
      this.problemService.getProblem(this.problemId).subscribe((problem: Problem) => {
        this.question.setValue(problem.question);
        this.answer.setValue(problem.answer);
        this.area.setValue(problem.area);
      });
    }
  }

  get question() {
    return this.problemForm.get('question');
  }

  get answer() {
    return this.problemForm.get('answer');
  }

  get area() {
    return this.problemForm.get('area');
  }

  submit() {
    // if edit
    if (this.problemId) {
      this.problemService.updateProblem(this.problemId, this.problemForm.value);

    // if create
    } else {
      this.problemService.createProblem(this.problemForm.value);
    }
  }
}
