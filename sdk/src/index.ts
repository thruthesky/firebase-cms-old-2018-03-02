import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
// import { SampleDirective } from './sample.directive';
// import { SamplePipe } from './sample.pipe';
import { FirebaseCmsService } from './firebase-cms.service';

export * from './components/login/login.component';
// export * from './sample.directive';
// export * from './sample.pipe';
export * from './firebase-cms.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent,
    // SampleDirective,
    // SamplePipe
  ],
  exports: [
    LoginComponent,
    // SampleDirective,
    // SamplePipe
  ],
  providers: [
    HttpClient
  ]
})
export class FirebaseCmsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FirebaseCmsModule,
      providers: [FirebaseCmsService]
    };
  }
}
