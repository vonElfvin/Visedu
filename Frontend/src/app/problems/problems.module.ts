import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemsRoutingModule } from './problems-routing.module';
import { ProblemsComponent } from './problems.component';
import { ProblemService } from './shared/problem.service';

@NgModule({
  imports: [
    CommonModule,
    ProblemsRoutingModule
  ],
  providers: [ProblemService],
  declarations: [ProblemsComponent]
})
export class ProblemsModule { }
