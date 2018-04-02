// angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// students imports
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentService } from './shared/student.service';

@NgModule({
  imports: [
    // angular modules
    CommonModule,

    // students modules
    StudentsRoutingModule
  ],
  providers: [StudentService],
  declarations: [StudentsComponent]
})
export class StudentsModule { }
