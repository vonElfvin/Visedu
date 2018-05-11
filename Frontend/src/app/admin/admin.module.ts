import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProblemsModule } from '../problems/problems.module';
import { MatCardModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    // angular modules
    CommonModule,

    // material modules
    MatCardModule,
    MatTabsModule,

    // admin modules
    AdminRoutingModule,

    // custom modules
    ProblemsModule,
  ],
  declarations: [AdminComponent],
  exports: []
})
export class AdminModule { }
