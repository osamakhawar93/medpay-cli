import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
//Components imports
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NotFoundComponent } from './template/not-found/not-found.component';
import { AuthHeader } from './auth/auth-header/auth-header.component';
import { SharedService } from './services/shared';
import { HttpModule } from '@angular/http';
import { DataToggleService } from './services/data-toggle.service';
import { AgreementComponent } from './auth/agreement/agreement.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import { PatientRegisterComponent } from './auth/patient-register/patient-register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PatientDocumentComponent } from './components/patient-document/patient-document.component';
import { DoctorDocumentComponent } from './components/doctor-document/doctor-document.component';
import { HeaderComponent } from './template/header/header.component';
import { PatientShareDetailComponent } from './components/patient-share-details/patient-share-details.component';
import { DoctorShareNewComponent } from './components/doctor-share-new/doctor-share-new.component';
import { LandingComponent } from './auth/landing/landing.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AddDoctorDocumentComponent } from './components/add-doc-document/add-doc-document';
import { FileUploadModule } from 'ng2-file-upload';
import {SelectModule} from 'ng2-select';
import { DoctorRequestShareComponent } from './components/doctor-request-share/doctor-request-share.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
    AuthHeader,
    AgreementComponent,
    PatientRegisterComponent,
    HomeComponent,
    PatientDocumentComponent,
    DoctorDocumentComponent,
    HeaderComponent,
    PatientShareDetailComponent,
    DoctorShareNewComponent,
    LandingComponent,
    NotificationsComponent,
    DoctorRequestShareComponent,
    AddDoctorDocumentComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    SelectModule,
    FileUploadModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
        }
    }),
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},SharedService,DataToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
