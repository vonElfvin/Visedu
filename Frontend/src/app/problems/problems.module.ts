import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemsRoutingModule } from './problems-routing.module';
import { ProblemsComponent } from './problems.component';
import { ProblemService } from './shared/problem.service';
import { CreateProblemComponent } from './create-problem/create-problem.component';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
  MatRadioModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { ProblemCardComponent } from './problem-card/problem-card.component';
import { ProblemFilterPipe } from './shared/pipes/problem-filter.pipe';
import { ProblemsDemoComponent } from './problems-demo/problems-demo.component';
import { ProblemFilterComponent } from './problem-filter/problem-filter.component';
import { ProblemTestComponent } from './problem-test/problem-test.component';
import { CompletedProblemService } from './shared/completed-problem.service';

@NgModule({
  imports: [
    // angular
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // material
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatChipsModule,

    // custom
    ProblemsRoutingModule,
  ],
  providers: [ProblemService, CompletedProblemService],
  declarations: [ProblemsComponent, CreateProblemComponent, ProblemListComponent, ProblemCardComponent, ProblemFilterPipe, ProblemsDemoComponent, ProblemFilterComponent, ProblemTestComponent],
  exports: [
    CreateProblemComponent,
    ProblemListComponent,
  ],
})
export class ProblemsModule { }
