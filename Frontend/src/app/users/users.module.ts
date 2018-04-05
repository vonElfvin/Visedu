// angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// material imports
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatRadioModule, MatSidenavModule,
  MatStepperModule
} from '@angular/material';

// users imports
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';
import { LoginGoogleComponent } from './login/login-google/login-google.component';
import { LoginFacebookComponent } from './login/login-facebook/login-facebook.component';
import { LoginEmailComponent } from './login/login-email/login-email.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from './shared/user.service';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';
import { ClassesModule } from '../classes/classes.module';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    ReactiveFormsModule,

    // material modules
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatStepperModule,
    MatRadioModule,
    MatSidenavModule,

    // custom modules
    UsersRoutingModule,
    ClassesModule,
  ],
  providers: [UserService],
  declarations: [
    UsersComponent,
    LoginComponent,
    LoginGoogleComponent,
    LoginFacebookComponent,
    LoginEmailComponent,
    SignUpComponent,
    ProfileComponent,
    SettingsComponent,
    AccountComponent
  ]
})
export class UsersModule { }
