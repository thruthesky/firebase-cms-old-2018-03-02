import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseCmsService {

  afAuth: AngularFireAuth = null;
  constructor() {

  }

  setAngularFireAuth(afAuth) {
    this.afAuth = afAuth;
  }
  version() {
    return '0.2.19';
  }
}
