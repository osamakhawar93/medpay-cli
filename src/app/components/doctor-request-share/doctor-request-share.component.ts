import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


import { SelectComponent } from 'ng2-select';
import { DataToggleService } from '../../services/data-toggle.service';
import * as $ from 'jquery';

@Component({

  selector: 'landing',
  styleUrls: ['./doctor-request-share.component.css'/*  './demo.css', './normalize.css', 'revealer.css', './pater.css' */],
  templateUrl: './doctor-request-share.component.html',
})
export class DoctorRequestShareComponent implements OnInit {
  public addressSelectedFor: any = "eng";
  public items: Array<string> = ['General Practitioner', 'Specialist', 'Testing lab', 'Pharmacy', 'Doctor', 'Patient'];
  public emptyItems: Array<string> = [];
  public itemsTranslated: Array<string> = ['Hausarzt', 'Spezialist', 'Prüflabor', 'Apotheke', 'Arzt', 'Patienten'];
  public typeOfUser: any;

  @ViewChild('chosenuser') public ngSelect: SelectComponent;

  constructor(public router: Router, private dateToggle: DataToggleService) {
    this.typeOfUser = JSON.parse(localStorage.getItem("typeOfUser"));
    console.log(this.typeOfUser);

  }

 /*  reset() {
    this.ngSelect.active = [];
  } */

  ngOnInit() {


    this.dateToggle.currentMessage.subscribe(message => {

      if (message == "eng") {

        this.emptyItems = this.items;

     /*    this.reset(); */
        this.resetfields();
      }
      else {

        this.emptyItems = this.itemsTranslated;
/*         this.reset(); */
        this.resetfields();
      }
    })

  }

  onChange(value) {
    console.log(value);
    if (value == "General Practitioner" || value == "Hausarzt") {
      $(".hideGP").show();
      $(".hideSpecialist").hide();
      $(".hidelab").hide();
      $(".hidepharmacy").hide();
      $(".hidedoctor").hide();
      $(".hidepatient").hide();
    }

    if (value == "Specialist" || value == "Spezialist") {
      $(".hideGP").hide();
      $(".hideSpecialist").show();
      $(".hidelab").hide();
      $(".hidepharmacy").hide();
      $(".hidedoctor").hide();
      $(".hidepatient").hide();
    }

    if (value == "Testing lab" || value == "Prüflabor") {
      $(".hideGP").hide();
      $(".hideSpecialist").hide();
      $(".hidelab").show();
      $(".hidepharmacy").hide();
      $(".hidedoctor").hide();
      $(".hidepatient").hide();
    }

    if (value == "Pharmacy" || value == "Apotheke") {
      $(".hideGP").hide();
      $(".hideSpecialist").hide();
      $(".hidelab").hide();
      $(".hidepharmacy").show();
      $(".hidedoctor").hide();
      $(".hidepatient").hide();
    }

    if (value == "Doctor" || value == "Arzt") {
      $(".hideGP").hide();
      $(".hideSpecialist").hide();
      $(".hidelab").hide();
      $(".hidepharmacy").hide();
      $(".hidedoctor").show();
      $(".hidepatient").hide();
    }

    if (value == "Patient" || value == "Patienten") {
      $(".hideGP").hide();
      $(".hideSpecialist").hide();
      $(".hidelab").hide();
      $(".hidepharmacy").hide();
      $(".hidedoctor").hide();
      $(".hidepatient").show();
    }
  }

  resetfields() {
    $(".hideGP").hide();
    $(".hideSpecialist").hide();
    $(".hidelab").hide();
    $(".hidepharmacy").hide();
    $(".hidedoctor").hide();
    $(".hidepatient").hide();
  }


  addActiveClass(elem) {
    $(".flags-li").removeClass("active");
    $("#" + elem).addClass("active");
  }
  moveToShareDetails() {
    this.router.navigate(['home/patient-share']);
  }
  moveBackTodocDocument() {
    this.router.navigate(['home/doctor-document']);
  }
}
