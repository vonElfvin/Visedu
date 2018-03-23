// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class CoreModule { }
