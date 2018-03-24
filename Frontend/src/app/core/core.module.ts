// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// material modules
import {
  MatButtonModule, MatDialogModule, MatIconModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

// components
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackService } from './feedback/feedback.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './feedback/confirm-dialog/confirm-dialog.component';
import { SnackbarComponent } from './feedback/snackbar/snackbar.component';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // material modules
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [FeedbackService],
  declarations: [NavComponent, FooterComponent, ConfirmDialogComponent, ConfirmDialogComponent, SnackbarComponent],
  entryComponents: [ConfirmDialogComponent, SnackbarComponent],
  exports: [NavComponent, FooterComponent]
})
export class CoreModule { }
