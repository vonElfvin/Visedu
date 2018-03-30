// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import { LoginGoogleComponent } from './login/login-google/login-google.component';
import { LoginFacebookComponent } from './login/login-facebook/login-facebook.component';

@NgModule({
  imports: [
    // angular modules
    CommonModule,

    // material modules
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  declarations: [LoginComponent, LoginGoogleComponent, LoginFacebookComponent],
  exports: [LoginComponent]
})
export class SharedModule { }
