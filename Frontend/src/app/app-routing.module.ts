import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { InfoHomeComponent } from './info/info-home/info-home.component';
import { InfoNotFoundComponent } from './info/info-not-found/info-not-found.component';

const routes: Routes = [
  { path: '**', component: InfoNotFoundComponent }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, config),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
