import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProblemsModule } from '../problems/problems.module';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    // angular modules
    CommonModule,

    // material modules
    MatCardModule,

    // admin modules
    AdminRoutingModule,

    // custom modules
    ProblemsModule,
  ],
  declarations: [AdminPageComponent, AdminComponent],
  exports: []
})
export class AdminModule { }
