import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient } from '@angular/common/http';
import * as firebsae from 'firebase';

@Injectable()
export class FirebaseCmsService {

  apiUrl: string = null;
  afAuth: AngularFireAuth = null;
  idToken: string = null;

  login = false; // If true, the user has logged in.


  constructor(
    public http: HttpClient
  ) {

  }

  setAngularFireAuth(afAuth) {
    this.afAuth = afAuth;

    // When user authentication changes.
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) { // User is signed in.
        this.login = true;
        user.getIdToken().then(x => this.updateIdToken(x)).catch(e => e);
      } else { // No user is signed in.
        this.login = false;
      }

    });

    // User's ID Token changes.
    this.afAuth.auth.onIdTokenChanged(user => {
      if (user) {  // Check if user logged in
        user.getIdToken().then(x => this.updateIdToken(x)).catch(e => e);
      }
    });

  }
  setFirebaseFunctionsApi(url: string) {
    this.apiUrl = url;
  }
  updateIdToken(idToken) {
    // console.log('ID Token: ', idToken);
    this.idToken = idToken;
  }

  version() {
    return '0.2.2';
  }

  get userDisplayName(): string {
    return this.afAuth.auth.currentUser.displayName;
  }

  userSet(data) {
    // this.http.post(this.apiUrl, data).subscribe(re => {
    //   console.log(re);
    // });
  }
}
