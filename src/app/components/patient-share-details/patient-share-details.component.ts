import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import * as $ from 'jquery';
@Component({

  selector: 'landing',
  styleUrls: ['./patient-share-details.component.css'],
  templateUrl: './patient-share-details.component.html',
})
export class PatientShareDetailComponent implements OnInit {
  public addressSelectedFor: any = "eng";
  public currentRow: any = null;
  public testingErr = [
    { email: "niklas@teleworm.de", type: "Doctor", date: '20 June 18 , 03:00 PM' },
    { email: "janina@dayrep.de", type: "Patient", date: '20 June 18 , 03:00 PM' },
    { email: "leonie@rhyta.de", type: "Patient", date: '20 June 18 , 03:00 PM' },
    { email: "christian@dayrep.de", type: "Patient", date: '20 June 18 , 03:00 PM' },
    { email: "praxis@artzschmidt.de", type: "Patient", date: '20 June 18 , 03:00 PM' },

  ]
  constructor(public router: Router) {


  }

  ngOnInit() {

    var docnameId = localStorage.getItem("docId");
    $(".doc-txt1").text("Document " + docnameId);

  }

  addActiveClass(elem) {
    $(".flags-li").removeClass("active");
    $("#" + elem).addClass("active");
  }

  moveToPatientDocs() {
    this.router.navigate(['home/patient-document']);
  }

  getRow(event) {
    this.currentRow = event;
  }

  removeUser() {
    $(this.currentRow).hide();
  }

  moveToShareDetails($event){
    // Share code
  }

}