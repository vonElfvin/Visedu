// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavArrowsComponent } from './nav-arrows/nav-arrows.component';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NoDashesPipe } from './pipes/no-dashes.pipe';

@NgModule({
  imports: [
    // angular
    CommonModule,
    RouterModule,

    // material
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [NavArrowsComponent, NoDashesPipe],
  exports: [NavArrowsComponent]
})
export class SharedModule { }
