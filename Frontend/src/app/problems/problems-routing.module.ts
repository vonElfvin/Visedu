import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemsDemoComponent } from './problems-demo/problems-demo.component';

const routes: Routes = [
  {
    path: 'problem-demo',
    component: ProblemsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemsRoutingModule { }
