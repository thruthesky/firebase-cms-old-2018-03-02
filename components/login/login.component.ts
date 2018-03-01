import { Component, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseCmsService } from './../../providers/firebase-cms.service';
@Component({
  selector: 'firebase-cms-login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  @Output() login = new EventEmitter<void>();
  constructor(public cms: FirebaseCmsService) {
    console.log(cms.afAuth);
  }


  onClickGoogleLogin() {
    this.cms.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(user => {
        console.log("Google login ok", user);
        this.login.emit();
      })
      .catch(e => {
        console.error('Google login failed with ....: ', e);
      });
  }

  onClickLogout() {
    this.cms.afAuth.auth.signOut();
  }
}
