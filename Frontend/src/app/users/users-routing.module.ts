import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../core/auth/guards/auth.guard';
import { AccountComponent } from './account/account.component';
import { InfoGameDownloadComponent } from '../info/info-game-download/info-game-download.component';
import { ClassesComponent } from '../classes/classes.component';
import { TeacherGuard } from '../core/auth/guards/teacher.guard';
import { StudentGuard } from '../core/auth/guards/student.guard';
import { UserService } from './shared/user.service';

const routes: Routes = [
  {
    path: 'logga-in',
    component: LoginComponent,
  },
  {
    path: 'skapa-konto',
    component: SignUpComponent,
  },
  {
    path: 'profilsida',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'konto',
        pathMatch: 'full',
      },
      {
        path: 'konto',
        component: AccountComponent,
      },
      {
        path: 'spelet',
        component: InfoGameDownloadComponent,
        canActivate: [StudentGuard],
      },
      {
        path: 'klassrum',
        component: ClassesComponent,
        canActivate: [TeacherGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
  constructor(private userService: UserService) { }
}
