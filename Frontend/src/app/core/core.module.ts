// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// material modules
import {
  MatButtonModule, MatDialogModule, MatIconModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

// custom modules
import { FirebaseModule } from './firebase/firebase.module';

// services
import { AuthService } from './auth/auth.service';
import { HttpService } from './http/http.service';

// components
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackService } from './feedback/feedback.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './feedback/confirm-dialog/confirm-dialog.component';
import { SnackbarComponent } from './feedback/snackbar/snackbar.component';
import { GlobalErrorHandler } from './error-handler/global-error-handler';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,

    // material modules
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,

    // custom modules
    FirebaseModule,
  ],
  providers: [FeedbackService, AuthService, AuthGuard, HttpService, GlobalErrorHandler],
  declarations: [NavComponent, FooterComponent, ConfirmDialogComponent, ConfirmDialogComponent, SnackbarComponent],
  entryComponents: [ConfirmDialogComponent, SnackbarComponent],
  exports: [NavComponent, FooterComponent]
})
export class CoreModule { }
