import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemsRoutingModule } from './problems-routing.module';
import { ProblemsComponent } from './problems.component';
import { ProblemService } from './shared/problem.service';
import { CreateProblemComponent } from './create-problem/create-problem.component';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule,
  MatRadioModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ProblemListComponent } from './problem-list/problem-list.component';

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
    MatCardModule,
    MatGridListModule,

    // custom
    ProblemsRoutingModule,
  ],
  providers: [ProblemService],
  declarations: [ProblemsComponent, CreateProblemComponent, ProblemListComponent],
  exports: [
    CreateProblemComponent,
    ProblemListComponent,
  ],
})
export class ProblemsModule { }
