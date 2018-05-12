import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminGuard } from '../core/auth/guards/admin.guard';
import { CreateProblemComponent } from '../problems/create-problem/create-problem.component';
import { ProblemListComponent } from '../problems/problem-list/problem-list.component';
import { UserListComponent } from '../users/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {path: '', component: ProblemListComponent},
      {path: 'problem-lista', component: ProblemListComponent},
      {path: 'skapa-problem', component: CreateProblemComponent},
      {path: 'konton', component: UserListComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
