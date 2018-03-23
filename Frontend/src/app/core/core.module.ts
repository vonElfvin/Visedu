// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// material modules
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

// components
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    HttpClientModule,

    // material modules
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [NavComponent, FooterComponent],
  exports: [NavComponent, FooterComponent]
})
export class CoreModule { }
