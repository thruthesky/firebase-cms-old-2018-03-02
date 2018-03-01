import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FirebaseCmsService {

  apiUrl: string = null;
  afAuth: AngularFireAuth = null;
  idToken: string = null;

  constructor(
    public http: HttpClient
  ) {

  }

  setAngularFireAuth(afAuth) {
    this.afAuth = afAuth;

    // When user authentication changes.
    this.afAuth.auth.onAuthStateChanged(user => {
      user.getIdToken().then(x => this.updateIdToken(x)).catch(e => e);
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

  userSet(data) {
    // this.http.post(this.apiUrl, data).subscribe(re => {
    //   console.log(re);
    // });
  }
}
