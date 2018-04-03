import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoHomeComponent } from './info-home/info-home.component';

const routes: Routes = [
  { path: '', component: InfoHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class InfoRoutingModule { }
