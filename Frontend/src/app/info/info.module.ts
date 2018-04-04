import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { InfoRoutingModule } from './info-routing.module';
import { InfoHomeComponent } from './info-home/info-home.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { InfoNotFoundComponent } from './info-not-found/info-not-found.component';
import { InfoGameDownloadComponent } from './info-game-download/info-game-download.component';
import { ClassesModule } from '../classes/classes.module';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    ClassesModule,

    // material modules
    MatButtonModule,
    MatCardModule,

    // info modules
    InfoRoutingModule,
  ],
  declarations: [InfoComponent, InfoHomeComponent, InfoNotFoundComponent, InfoGameDownloadComponent],
  exports: [InfoComponent, InfoNotFoundComponent, InfoGameDownloadComponent]
})
export class InfoModule { }
