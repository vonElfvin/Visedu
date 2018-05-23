import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemsDemoComponent } from './problems-demo/problems-demo.component';
import { StudentGuard } from '../core/auth/guards/student.guard';

const routes: Routes = [
  {
    path: 'problem-demo',
    component: ProblemsDemoComponent,
    canActivate: [StudentGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemsRoutingModule { }
