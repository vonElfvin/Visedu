import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemsRoutingModule } from './problems-routing.module';
import { ProblemsComponent } from './problems.component';
import { ProblemService } from './shared/problem.service';
import { CreateProblemComponent } from './create-problem/create-problem.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // angular
    CommonModule,
    ReactiveFormsModule,

    // material
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,

    // custom
    ProblemsRoutingModule,
  ],
  providers: [ProblemService],
  declarations: [ProblemsComponent, CreateProblemComponent],
  exports: [CreateProblemComponent],
})
export class ProblemsModule { }
