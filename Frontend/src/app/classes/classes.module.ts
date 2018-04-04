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

@NgModule({
  imports: [
    CommonModule,
    ClassesRoutingModule
  ],
  providers: [ClassService],
  declarations: [ClassesComponent, ClassCardComponent, ClassListComponent],
  exports: [ClassesComponent]
})
export class ClassesModule { }
