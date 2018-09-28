import {
    Component,
    OnInit
  } from '@angular/core';
  
  import { ActivatedRoute, Router } from '@angular/router';
 
  
  declare var $: any;
  @Component({
  
    selector: 'landing',
    styleUrls: ['./notifications.component.css'/*  './demo.css', './normalize.css', 'revealer.css', './pater.css' */],
    templateUrl: './notifications.component.html',
  })
  export class NotificationsComponent  {
    public typeOfUser:any;
    public patientNotPart:boolean = false;
    public patientNotPart1:boolean = false;
    public doctorNotPart:boolean = false;
    constructor(public router: Router ){
      this.typeOfUser = JSON.parse(localStorage.getItem("typeOfUser"));
      console.log(this.typeOfUser);
  
    }
    falseChecks(){
      this.patientNotPart = false;
      this.patientNotPart1 = false;
      this.doctorNotPart=false;
    
    }

    public ngOnInit() {
     if(this.typeOfUser==1){
      this.falseChecks();
      this.patientNotPart=true;
      this.patientNotPart1=true;
     }else{
      this.falseChecks();
      this.doctorNotPart=true;
     }
  }
  goBackPatientOrCustomer()
  {
    if(this.typeOfUser==1){
      this.router.navigate(['home/patient-share']);
    }
    else{
      this.router.navigate(['home/doctor-share-request']);
    }
  }
    
  }