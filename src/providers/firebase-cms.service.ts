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
    console.log('ID Token: ', idToken);
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

  register(data) {
    this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
      .then((user: firebase.User) => {
        console.log(user);

        user.getIdToken(/* 강제변경 하지 않음 */ false)
          .then((idToken) => { // 이 (JWT) 토큰을 서버로 전송하면 된다.
            console.log('ID Token: ', idToken);
            this.idToken = idToken;

            let url = this.apiUrl + '?route=user.set&idToken=' + this.idToken;
            url += '&name=' + data.name;
            url += '&mobile=' + data.mobile;

            console.log('url: ', url);

            // 여기서 부터. observable 을 promise 로 바꾸고  작업을 한다.
            this.http.get(url).subscribe(x => {
              console.log(x);
            });

          })
          .catch(function (error) {
            // 에러 발생
          });

      })
      .catch(error => {
        console.log(error);
      });

  }
}
