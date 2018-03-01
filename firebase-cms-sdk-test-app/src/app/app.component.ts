import { Component } from '@angular/core';
import { FirebaseCmsService } from 'firebase-cms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version = '';
  constructor( cms: FirebaseCmsService ) {
    //
    this.version = cms.version();
  }
  
  onLogin() {
    console.log("login success");
  }
}
