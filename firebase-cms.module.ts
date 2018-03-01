import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { FirebaseCmsService } from './providers/firebase-cms.service';
export * from './providers/firebase-cms.service';

import { LoginComponent } from './components/login/login.component';
export * from './components/login/login.component';


@NgModule({
  declarations : [
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent
  ],
  providers : [
    HttpClient,
    FirebaseCmsService
   ]
})


export class FirebaseCmsModule {}
