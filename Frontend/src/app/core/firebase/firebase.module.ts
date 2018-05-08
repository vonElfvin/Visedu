import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';
import { FirebaseAuthService } from './firebase-auth/firebase-auth.service';
import { FirebaseDatabaseService } from './firebase-database/firebase-database.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [
    FirebaseAuthService,
    FirebaseDatabaseService,
  ],
  declarations: []
})
export class FirebaseModule { }
