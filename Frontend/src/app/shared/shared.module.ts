// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule,
  MatIconModule, MatInputModule
} from '@angular/material';
import { LoginGoogleComponent } from './login/login-google/login-google.component';
import { LoginFacebookComponent } from './login/login-facebook/login-facebook.component';
import { LoginEmailComponent } from './login/login-email/login-email.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // material modules
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
  ],
  declarations: [LoginComponent, LoginGoogleComponent, LoginFacebookComponent, LoginEmailComponent],
  exports: [LoginComponent]
})
export class SharedModule { }
