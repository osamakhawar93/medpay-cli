import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SharedService } from '../../services/shared';
import { DataToggleService } from '../../services/data-toggle.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'header-inner',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  public typeOfUser: any;
  public localState = { value: '' };
  public patientTxt: boolean = false;
  public doctorTxt: boolean = false;
  public patientName: boolean = false;
  public DoctorName: boolean = false;
  public langName = localStorage.getItem("LanguageName");
  public localpname: any;
  public localdname: any;



  constructor(public router: Router, private translate: TranslateService, public _sharedService: SharedService, private dateToggle: DataToggleService) { }


  addActiveClass(langName) {
    $(".flags-li").removeClass("ActiveFlag");
    $("#" + langName).addClass("ActiveFlag");
    this.dateToggle.changeMessage(langName);
    localStorage.setItem("LanguageName", langName);
  }

  routeTonotifications() {
    this.router.navigate(['/home/notifications']);
  }


  public ngOnInit() {


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

    $("#" + this.langName).trigger("click");

  }

  switchLanguage(language) {
    this.translate.use(language);
  }

  moveToPatOrDocHome() {
    if (this.typeOfUser == 1) {


      this.router.navigate(['home/patient-document']);
    }
    else {

      this.router.navigate(['home/doctor-document']);
    }
  }

  logout() {



    this.router.navigate(['sign-in']);

  }


  showOverlay($event) {
    $($event).find('.overlay-bottom').css("display", "block");
  }

  hideOverlay(event) {
    $(event).find('.overlay-text').removeClass("overlay-height");
  }


  closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }

  showDropdownForCategories() {
    $(".main-dropdown-wrap2").fadeToggle();
  }


}
