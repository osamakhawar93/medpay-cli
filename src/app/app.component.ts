import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { DataToggleService } from './services/data-toggle.service';
import { SharedService } from './services/shared';

declare var $: any;

@Component({

  selector: 'crypto-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

  public userLoggedIn: boolean = false;
  public typeOfUser: any;
  public patientTxt: boolean = false;
  public doctorTxt: boolean = false;
  public patientName: boolean = false;
  public DoctorName: boolean = false;

  public langName = localStorage.getItem("LanguageName");
  public localpname: any;
  public localdname: any;

  constructor(public router: Router, private translate: TranslateService, public _sharedService: SharedService, private dateToggle: DataToggleService) {
    this._sharedService.changeLoggedInStatus$.subscribe(a => {
      console.log(a);
      if (a) {
        this.userLoggedIn = true;
      }
    })





    var a = localStorage.getItem("loggedInStatus");

    if (a == "true") {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }


    this.typeOfUser = JSON.parse(localStorage.getItem("typeOfUser"));


    if (this.typeOfUser == 1) {
      this.patientName = true;
      this.patientTxt = true;
      this.DoctorName = false;
      this.doctorTxt = false;

    } else {
      this.DoctorName = true;
      this.doctorTxt = true;
      this.patientTxt = false;
      this.patientName = false;
    }
  }



  public ngOnInit() {


    this.switchLanguage('de');



    this.localdname = localStorage.getItem("docname");
    this.localpname = localStorage.getItem("patname");


    this.dateToggle.currentMessage2.subscribe(message2 => {

      if (message2 == "patientName" || this.localpname == "patientName") {
        this.localdname = "";
        this.patientName = true;
        this.patientTxt = true;
        this.DoctorName = false;
        this.doctorTxt = false;
      }
      else
        if (message2 == "docName" || this.localdname == "docName") {
          this.localpname = "";
          this.DoctorName = true;
          this.patientName = false;
          this.patientTxt = false;
          this.doctorTxt = true;
        }
    })

  }




  moveToPatOrDocHome() {
    this.typeOfUser = JSON.parse(localStorage.getItem("typeOfUser"));
    console.log(this.typeOfUser);
    if (this.typeOfUser == 1) {


      this.router.navigate(['home/patient-document']);
    }
    else {

      this.router.navigate(['home/doctor-document']);
    }
  }


  switchLanguage(language) {
    this.translate.use(language);
  }

  addActiveClass(elem) {

    $(".flags-li").removeClass("ActiveFlag");
    $("#" + elem).addClass("ActiveFlag");
    this._sharedService.changeLanguage(elem);
    this.dateToggle.changeMessage(elem);
    localStorage.setItem("LanguageName", elem);

  }


  logout() {

    localStorage.clear();
    this.userLoggedIn = false;
    this.router.navigate(['sign-in']);

  }

}
