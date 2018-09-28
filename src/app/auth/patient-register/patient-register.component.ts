import {
  Component,
  OnInit
} from '@angular/core';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataToggleService } from '../../services/data-toggle.service';
import * as $ from 'jquery';
import { SharedService } from '../../services/shared';



@Component({

  selector: 'landing',
  styleUrls: ['./patient-register.component.scss'/*  './demo.css', './normalize.css', 'revealer.css', './pater.css' */],
  templateUrl: './patient-register.component.html',
})


export class PatientRegisterComponent implements OnInit {
  public addressSelectedFor: any = "eng";
  public regpart1: boolean = false;
  public regpart2: boolean = false;
  public congoPart: boolean = false;




  public fname: string = "";
  public email: string = "";
  public doclicense: string = "";

  public selectionPart: boolean = true;
  public items: Array<string> = ['abc', 'xyz'];
  public items1: Array<string> = ['John', 'micheal'];
  public langNames = localStorage.getItem("LanguageName");
  public doctorSelectedCheck: boolean = false;
  public patientSelectedCheck: boolean = true;


  public pName = "patientName";
  public dName = "docName";


  constructor(public _sharedService:SharedService,public router: Router, private translate: TranslateService, private dateToggle: DataToggleService) {

    localStorage.setItem("typeOfUser", JSON.stringify(1));

  }


  ngOnInit() {

    if (this.langNames == 'eng') {
      this.addActiveClass('eng');
      this.switchLanguage('en');
    } else {
      this.addActiveClass('german');
      this.switchLanguage('de');
    }

  }

  switchLanguage(language) {
    this.translate.use(language);
  }

  falseChecks() {
    this.doctorSelectedCheck = false;
    this.patientSelectedCheck = false;


  }
  patientSelected() {


    this.falseChecks();
    this.patientSelectedCheck = true;

    localStorage.setItem("typeOfUser", JSON.stringify(1));


  }

  doctorSelected() {

    this.falseChecks();
    this.doctorSelectedCheck = true;

    localStorage.setItem("typeOfUser", JSON.stringify(2));

  }


  routeToPatientDoc() {


    localStorage.setItem("loggedInStatus","true");
    this._sharedService.changeLoginStatus(true);


    if (this.doctorSelectedCheck) {
      this.dateToggle.changeName(this.dName);
      this.router.navigate(['home/doctor-document']);
    } else {
      this.dateToggle.changeName(this.pName);
      this.router.navigate(['home/patient-document']);
    }

  }
  countryCodeChck(value) {

    if (value.length > 3) {
      $("#countryCode").val('');
    }
  }
  navigateToReg1() {
    $('.tab-pane').removeClass('active in');
    $('#tab2default').addClass('active in');
    $('#two').addClass('active');
    $('#one').removeClass('active');
    $('#one a').html('<img id="theImg" class="tick-img" src="../../../assets/images/tick.png" />')
  }


  resetErrors() {
    $(".fnameerror").hide();
    $(".emailerror").hide();
    $(".doclicenseerror").hide();
    $(".cberror").hide();
  }

  addActiveClass(elem) {
    $(".flags-li").removeClass("ActiveFlag");
    $("#" + elem).addClass("ActiveFlag");
  }

  navigateToReg2() {

    var error = false;


    if (this.fname === undefined || this.fname === null || this.fname === "") {
      $(".fnameerror").show();
      error = true;
    }

    if (this.email === undefined || this.email === "") {
      $(".emailerror").show();
      error = true;
    }

    if (this.doctorSelectedCheck) {
      if (this.doclicense == undefined || this.doclicense === "") {
        $(".doclicenseerror").show();
        error = true;
      }
    }

    if ($('#check').prop('checked') == false) {
      $(".cberror").show();
      error = true;
    }

    if (error) {

    }
    else {

      this.resetErrors();
      $('.tab-pane').removeClass('active in');
      $('#tab3default').addClass('active in');
      $('#three').addClass('active');
      $('#two').removeClass('active');
      $('#two a').html('<img id="theImg" class="tick-img" src="../../../assets/images/tick.png" />');
    }
  }



  navigateTocongoPart() {
    $('.tab-pane').removeClass('active in');
    $('#tab4default').addClass('active in');
    $('#four').addClass('active');
    $('#three').removeClass('active');
    $('#three a').html('<img id="theImg" class="tick-img" src="../../../assets/images/tick.png" />')
  }

  routeToLogin() {

    this.router.navigate(['signin']);
  }
  navigateToAgree() {
    this.router.navigate(['agreement']);
  }

  navigateToSelectionpart() {
    $('.tab-pane').removeClass('active in');
    $('#tab1default').addClass('active in');
    $('#one').addClass('active');
    $('#two').removeClass('active');
    $('#one a').html('01')

  }
  moveBackToReg1() {
    $('.tab-pane').removeClass('active in');
    $('#tab2default').addClass('active in');
    $('#two').addClass('active');
    $('#three').removeClass('active');
    $('#two a').html('02')
  }
  moveToHome() {
    this.router.navigate(['landing']);
  }


}
