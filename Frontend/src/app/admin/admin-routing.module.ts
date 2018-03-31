import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [AdminGuard],
    children: [
      {path: '', component: AdminPageComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
