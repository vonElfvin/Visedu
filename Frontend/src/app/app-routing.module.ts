import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { InfoModule } from './info/info.module';

const routes: Routes = [
  {
    path: 'logga-in',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    InfoModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
