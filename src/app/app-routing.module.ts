import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { NotFoundComponent } from './template/not-found/not-found.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';
import { AgreementComponent } from './auth/agreement/agreement.component';
import { PatientRegisterComponent } from './auth/patient-register/patient-register.component';
import { HomeComponent } from './components/home/home.component';
import { PatientDocumentComponent } from './components/patient-document/patient-document.component';
import { DoctorDocumentComponent } from './components/doctor-document/doctor-document.component';
import { PatientShareDetailComponent } from './components/patient-share-details/patient-share-details.component';
import { DoctorShareNewComponent } from './components/doctor-share-new/doctor-share-new.component';
import { LandingComponent } from './auth/landing/landing.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AddDoctorDocumentComponent } from './components/add-doc-document/add-doc-document';
import { DoctorRequestShareComponent } from './components/doctor-request-share/doctor-request-share.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: NotFoundComponent },
  { path: 'agreement', component: AgreementComponent },
  { path: 'register-patient', component: PatientRegisterComponent },
  { path: '', component:LandingComponent  },
  { path: 'landing', component:LandingComponent  },

  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'patient-document', pathMatch: 'full' },
      { path: 'patient-document', component: PatientDocumentComponent },
      { path: 'doctor-document', component: DoctorDocumentComponent },
      { path: 'patient-share', component: PatientShareDetailComponent },
      { path: 'doctor-share-new', component: DoctorShareNewComponent },
      { path: 'notifications', component:NotificationsComponent  },
      {path: 'add-doctor-document', component:AddDoctorDocumentComponent},
      {path: 'doctor-share-request', component:DoctorRequestShareComponent}
      
    ]
  },
  { path: '**', component: NotFoundComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
