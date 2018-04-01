// angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom imports
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { TeacherService } from './shared/teacher.service';

@NgModule({
  imports: [
    // angular modules
    CommonModule,

    // custom modules
    TeachersRoutingModule
  ],
  providers: [TeacherService],
  declarations: [TeachersComponent]
})
export class TeachersModule { }
