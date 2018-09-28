import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { TranslateService } from '@ngx-translate/core';

import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { SelectComponent } from 'ng2-select';
import * as $ from 'jquery';
import { DataToggleService } from '../../services/data-toggle.service';
import { SharedService } from '../../services/shared';



const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({

  selector: 'landing',
  styleUrls: ['./add-doc-document.scss'/*  './demo.css', './normalize.css', 'revealer.css', './pater.css' */],
  templateUrl: './add-doc-document.html',
})
export class AddDoctorDocumentComponent implements OnInit {


  public addressSelectedFor: any = "eng";
  public items: Array<string> = ['General Practitioner', 'Specialist', 'Testing lab', 'Pharmacy', 'Doctor', 'Patient'];
  public emptyItems: Array<string> = [];
  public itemsTranslated: Array<string> = ['Hausarzt', 'Spezialist', 'Prüflabor', 'Apotheke', 'Arzt', 'Patienten'];
  public uploadErr: boolean = false;

  public pname: string = "";
  public pemail: string = "";



  private mdlSampleIsOpen: boolean = false;
  private openModal(open: boolean): void {
    this.mdlSampleIsOpen = open;
  }



  public langName = localStorage.getItem("LanguageName");
  public uploader: FileUploader = new FileUploader({
    url: URL,
    maxFileSize: 10 * 1024
  });



  @ViewChild('chosenuser') public ngSelect: SelectComponent;

  constructor(public router: Router, public _sharedService: SharedService, private translate: TranslateService, private dateToggle: DataToggleService) {

  }


  ngOnInit() {

    this.dateToggle.currentMessage.subscribe(message => {

      if (message == "eng") {

        this.emptyItems = this.items;
        /*    this.reset(); */
        this.resetfields();

      }
      else {

        this.emptyItems = this.itemsTranslated;
        /*    this.reset(); */
        this.resetfields();
      }
    })

  }


  onChange(value) {



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

  emptyArray() {
    this.uploader.clearQueue()
  }

  switchLanguage(language) {
    this.translate.use(language);
  }

  onFileSelected(event) {
    if (this.uploader.queue.length > 1) {
      this.uploader.clearQueue();
      this.uploader.addToQueue(event)
    }

  }

  dropped(event) {
    console.log(event);
  }

  patientDetailsRequired() {
    var error = false;

    if (this.pname == undefined || this.pname == "") {
      $(".pnerror").show();
      error = true;
    }

    if (this.pemail == undefined || this.pemail == "") {
      $(".eaerror").show();
      error = true;
    }

    if (error) {

    }
    else {
      $(".pnerror").hide();
      $(".eaerror").hide();
      /*  $('#myModal3').modal('toggle'); */
      this.mdlSampleIsOpen = true;
      this.openModal(this.mdlSampleIsOpen);
    }
  }

  moveBackTodocDocument() {

    this.router.navigate(['home/doctor-document']);
  }


}