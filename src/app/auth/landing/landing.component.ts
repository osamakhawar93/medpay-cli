import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataToggleService } from '../../services/data-toggle.service';


import * as $ from 'jquery';
import { SharedService } from '../../services/shared';
@Component({

  selector: 'landing',
  styleUrls: ['./landing.component.css'/*  './demo.css', './normalize.css', 'revealer.css', './pater.css' */],
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  public addressSelectedFor: any = "eng";


  constructor(public router: Router, private translate: TranslateService, private dateToggle: DataToggleService, public _sharedService: SharedService) {

    this._sharedService.changeEmittedForLanguage$.subscribe(languageCode => {
      this.switchLanguage(languageCode);
      if(languageCode == undefined){
        console.log("undefined");
      }
    })

  }

  ngOnInit() {


  }



  routeToLogin() {
    this.router.navigate(['sign-in']);
  }

  routeToAgree() {
    this.router.navigate(['agreement']);
  }
  moveToHome() {
    this.router.navigate(['landing']);
  }

  switchLanguage(language) {
    if (language == "en") {
      localStorage.setItem("language", "english");
    } else {
      localStorage.setItem("language", "german");
    }
    this.translate.use(language);
  }
}
