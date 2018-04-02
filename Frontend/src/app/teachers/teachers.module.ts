// angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// teachers imports
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { TeacherService } from './shared/teacher.service';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';

@NgModule({
  imports: [
    // angular modules
    CommonModule,

    // custom modules
    TeachersRoutingModule
  ],
  providers: [TeacherService],
  declarations: [TeachersComponent, CreateTeacherComponent]
})
export class TeachersModule { }
