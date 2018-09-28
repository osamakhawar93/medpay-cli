import {
  Component,
  OnInit
} from '@angular/core';

import { Router } from '@angular/router';
import { DataToggleService } from '../../services/data-toggle.service';
import * as $ from 'jquery';

declare var $: any;
@Component({

  selector: 'landing',
  styleUrls: ['./patient-document.component.scss'],
  templateUrl: './patient-document.component.html',
})
export class PatientDocumentComponent implements OnInit {
  public addressSelectedFor: any = "eng";

  public typeOfUser: any;
  public shownorecords: boolean = false;

  public patientTxt: boolean = false;
  public doctorTxt: boolean = false;
  public patientName: boolean = false;
  public DoctorName: boolean = false;

  public localpname: any;
  public localdname: any;

  constructor(public router: Router, private dateToggle: DataToggleService) {
    this.typeOfUser = JSON.parse(localStorage.getItem("typeOfUser"));
    console.log(this.typeOfUser);

  }

  ngOnInit() {

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




  addActiveClass(elem) {
    $(".flags-li").removeClass("active");
    $("#" + elem).addClass("active");
  }


  doNothing() {
    // Write code for sharing
  }

  moveToShareDetails(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    
    localStorage.setItem('docId', value);
    this.router.navigate(['home/patient-share']);
  }

  delteWallet() {
    $(".hidewallet").hide();
    $(".norecords").show();
  }

  toggleBtnChange(id, img, txt) {

    if ($("#" + id).prop('checked')) {
      $("#" + img).attr("src", "../../../assets/images/actv-usr-icon.png");
      $("#" + txt).text(" Shared with Ali, Dania and 05 other People");

    } else {
      $("#" + img).attr("src", "../../../assets/images/dsabl-usr-icon.png");
      $("#" + txt).text("N/A");
    }
  }

  gotoSignup() {
    this.router.navigate(['/signin']);
  }


}