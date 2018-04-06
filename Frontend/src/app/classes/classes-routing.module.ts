import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes.component';
import { TeacherGuard } from '../core/auth/guards/teacher.guard';
import { CreateClassComponent } from './create-class/create-class.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassPageComponent } from './class-page/class-page.component';

const routes: Routes = [
  {
    path: 'klassrum',
    component: ClassesComponent,
    canActivate: [TeacherGuard],
    children: [
      {
        path: '',
        component: ClassListComponent,
      },
      {
        path: 'skapa-klassrum',
        component: CreateClassComponent,
      },
      {
        path: ':className',
        component: ClassPageComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
