import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentService } from './shared/student.service';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule
  ],
  providers: [StudentService],
  declarations: [StudentsComponent]
})
export class StudentsModule { }
