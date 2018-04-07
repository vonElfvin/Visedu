// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ClassesRoutingModule } from './classes-routing.module';

// services
import { ClassService } from './shared/class.service';

// components
import { ClassesComponent } from './classes.component';
import { ClassCardComponent } from './class-card/class-card.component';
import { ClassListComponent } from './class-list/class-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ClassPageComponent } from './class-page/class-page.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StudentsModule } from '../students/students.module';
import { ClassOptionComponent } from './class-option/class-option.component';

@NgModule({
  imports: [
    // angular
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,

    // material
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,

    // custom
    ClassesRoutingModule,
    StudentsModule,
    SharedModule,
  ],
  providers: [ClassService],
  declarations: [ClassesComponent, ClassCardComponent, ClassListComponent, ClassPageComponent, CreateClassComponent, ClassOptionComponent],
  exports: [ClassesComponent]
})
export class ClassesModule { }
