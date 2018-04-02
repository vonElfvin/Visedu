import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes.component';
import { ClassService } from './shared/class.service';

@NgModule({
  imports: [
    CommonModule,
    ClassesRoutingModule
  ],
  providers: [ClassService],
  declarations: [ClassesComponent]
})
export class ClassesModule { }
