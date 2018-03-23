import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminPageComponent],
  exports: [AdminPageComponent]
})
export class AdminModule { }
