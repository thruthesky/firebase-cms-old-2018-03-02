import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/// angular firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { FirebaseCmsModule, FirebaseCmsService } from 'firebase-cms';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirebaseCmsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [ FirebaseCmsService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( cms: FirebaseCmsService, afAuth: AngularFireAuth ) {
    cms.setAngularFireAuth( afAuth );
    // cms.setFirebaseFunctionsApi( "https://us-central1-thruthesky-firebase-backend.cloudfunctions.net/api" );
  }
}
