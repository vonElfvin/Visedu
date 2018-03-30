import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { InfoRoutingModule } from './info-routing.module';
import { InfoHomeComponent } from './info-home/info-home.component';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    // angular modules
    CommonModule,

    // material modules
    MatButtonModule,
    MatCardModule,

    // custom modules
    InfoRoutingModule,
  ],
  declarations: [InfoComponent, InfoHomeComponent],
  exports: [InfoComponent]
})
export class InfoModule { }
