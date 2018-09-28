import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


import * as $ from 'jquery';
@Component({

  selector: 'doctor-share-new',
  styleUrls: ['./doctor-share-new.component.css'],
  templateUrl: './doctor-share-new.component.html',
})
export class DoctorShareNewComponent implements OnInit {
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
    console.log(docnameId);
    $(".doc-txt1").text("Document " + docnameId);
  }

  addActiveClass(elem) {
    $(".flags-li").removeClass("active");
    $("#" + elem).addClass("active");
  }

  moveToPatientDocs() {
    this.router.navigate(['home/doctor-document']);
  }

  getRow(event) {
    this.currentRow = event;
  }

  removeUser() {
    $(this.currentRow).hide();
  }

  moveToShareDetails (){
    // code to share
  }

}