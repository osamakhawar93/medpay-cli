import { Component, OnInit } from '@angular/core';
import { AuthHeader } from '../auth-header/auth-header.component';
import { Router } from '@angular/router';
import { DataToggleService } from '../../services/data-toggle.service';
import { SharedService } from '../../services/shared';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'crypto-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  public addressSelectedFor: any = "eng";
  public localState = { value: '' };
  public langNames = localStorage.getItem("LanguageName");
  public doctorSelectedCheck: boolean = false;
  public patientSelectedCheck: boolean = true;

  public pName = "patientName";
  public dName = "docName";

  constructor(public router: Router, private translate: TranslateService, public _sharedService: SharedService, private dateToggle: DataToggleService) { 

    
  }



  ngOnInit() {

    this._sharedService.changeEmittedForLanguage$.subscribe(a => {

    })


    if (localStorage.getItem("LanguageName") == null || localStorage.getItem("LanguageName") == undefined) {

      $("#" + this.langNames).trigger("click");
    }
    else {
      this.langNames = localStorage.getItem("LanguageName");
      this.addActiveClass(this.langNames);
      $("#" + this.langNames).trigger("click");
      this._sharedService.changeLanguage(this.langNames);
    }
  }


  addActiveClass(elem) {
    $(".flags-li").removeClass("ActiveFlag");
    $("#" + elem).addClass("ActiveFlag");
  }



  falseChecks() {
    this.doctorSelectedCheck = false;
    this.patientSelectedCheck = false;
  }

  patientSelected() {
    this.falseChecks();
    this.patientSelectedCheck = true;
    this.dateToggle.changeName(this.pName);
    localStorage.setItem("patname", this.pName);
    localStorage.setItem("docname", "");
    localStorage.setItem("typeOfUser", JSON.stringify(1));
  }

  doctorSelected() {
    this.falseChecks();
    this.doctorSelectedCheck = true;
    this.dateToggle.changeName(this.dName);
    localStorage.setItem("docname", this.dName);
    localStorage.setItem("patname", "");
    localStorage.setItem("typeOfUser", JSON.stringify(2));
  }



  routeToPatientDoc() {
    var error = false;
    if ($('#radiob').prop('checked') == false && $('#radiob2').prop('checked') == false) {
      $(".radioerror").show();
      error = true;
    }
    if (error) {

    }
    else {
      $(".radioerror").hide();

      localStorage.setItem("loggedInStatus","true");
      this._sharedService.changeLoginStatus(true);

      if (this.doctorSelectedCheck) {


      
        this.dateToggle.changeName(this.dName);
        this.router.navigate(['home/doctor-document']);

      } else {
        if (this.patientSelectedCheck) {
         
          this.dateToggle.changeName(this.pName);
          this.router.navigate(['home/patient-document']);
        }
      }

    }

    var langName = localStorage.getItem("LanguageName");
    if (!langName) {
      this._sharedService.changeLanguage('eng');
    }
    this._sharedService.changeLanguage(langName);
  }

  routeToReg() {
    this.router.navigate(['agreement']);
    this._sharedService.changeLanguage(this.langNames);
    this.addActiveClass(this.langNames);
  }
  showPass() {
    $('#pass').attr('type', 'text');
  }
  hidePass() {
    $('#pass').attr('type', 'password');
  }
  moveToHome() {
    this.router.navigate(['landing']);
  }
  switchLanguage(language) {
    this.translate.use(language);
  }


}

