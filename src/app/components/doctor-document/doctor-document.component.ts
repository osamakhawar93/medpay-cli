import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { DataToggleService } from '../../services/data-toggle.service';
import { SharedService } from '../../services/shared';

declare var $: any;
@Component({

  selector: 'landing',
  styleUrls: ['./doctor-document.component.css'],
  templateUrl: './doctor-document.component.html',
})
export class DoctorDocumentComponent implements OnInit {
  public addressSelectedFor: any = "eng";
  public langName = localStorage.getItem("LanguageName");
  public typeOfUser: any;
  public patientTxt: boolean = false;
  public doctorTxt: boolean = false;
  public patientName: boolean = false;
  public DoctorName: boolean = false;

  constructor(public router: Router, public _sharedService: SharedService, private dateToggle: DataToggleService) {
    this.typeOfUser = JSON.parse(localStorage.getItem("typeOfUser"));
    console.log(this.typeOfUser);

  }

  ngOnInit() {
    this.dateToggle.currentMessage.subscribe(message => {

      if (message == "patientName") {
        this.patientName = true;
        this.patientTxt = true;
      }
      else
        if (message == "docName") {
          this.DoctorName = true;
          this.doctorTxt = true;
        }
    })
  }


  addActiveClass(elem) {
    $(".flags-li").removeClass("active");
    $("#" + elem).addClass("active");
  }
  navigateToDocShareReq() {
    this.router.navigate(['home/doctor-share-request']);
  }
  moveToDoctorDocument() {
    this.router.navigate(['home/add-doctor-document']);
  }
  moveToShareDetails(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    localStorage.setItem('docId', value);
    this.router.navigate(['home/doctor-share-new']);
  }
}
