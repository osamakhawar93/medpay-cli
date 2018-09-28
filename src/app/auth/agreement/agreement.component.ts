import {
  Component,
  OnInit
} from '@angular/core';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataToggleService } from '../../services/data-toggle.service';


declare var $: any;
@Component({

  selector: 'landing',
  styleUrls: ['./agreement.component.css'/*  './demo.css', './normalize.css', 'revealer.css', './pater.css' */],
  templateUrl: './agreement.component.html',
})
export class AgreementComponent implements OnInit {

  public agree2: boolean = false;
  public agree1: boolean = true;
  public addressSelectedFor: any = "eng";
  public langNames = localStorage.getItem("LanguageName");
  constructor(public router: Router, private translate: TranslateService, private dateToggle: DataToggleService) {


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

  addActiveClass(elem) {
    $(".flags-li").removeClass("ActiveFlag");
    $("#" + elem).addClass("ActiveFlag");
  }


  navigateToAgree2() {
    this.agree1 = false;
    this.agree2 = true;
  }

  navigateToLanding() {
    this.router.navigate(['landing']);
  }
  navigateToPatientRegister() {
    this.router.navigate(['register-patient']);

  }

  moveToHome() {
    this.router.navigate(['landing']);
  }



}