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
import { MatButtonModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ClassPageComponent } from './class-page/class-page.component';
import { CreateClassComponent } from './create-class/create-class.component';

@NgModule({
  imports: [
    // angular
    CommonModule,
    FlexLayoutModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule,

    // custom
    ClassesRoutingModule,
  ],
  providers: [ClassService],
  declarations: [ClassesComponent, ClassCardComponent, ClassListComponent, ClassPageComponent, CreateClassComponent],
  exports: [ClassesComponent]
})
export class ClassesModule { }
