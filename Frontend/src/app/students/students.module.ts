// angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// students imports
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentService } from './shared/student.service';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StudentPageComponent } from './student-page/student-page.component';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    FlexLayoutModule,

    // material modules
    MatCardModule,

    // students modules
    StudentsRoutingModule
  ],
  providers: [StudentService],
  declarations: [StudentsComponent, StudentListComponent, StudentCardComponent, StudentPageComponent],
  exports: [StudentListComponent, StudentPageComponent]
})
export class StudentsModule { }
