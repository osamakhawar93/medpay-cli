import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import { SharedService } from '../../services/shared';

@Component({
  selector: 'auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
})

export class AuthHeader implements OnInit {

  constructor(private translate: TranslateService, public _sharedService: SharedService) { }

  ngOnInit() {
    this._sharedService.changeLanguage('de');
  }


  addActiveClass(elem) {

    $(".flags-li").removeClass("ActiveFlag");
    $("#" + elem).addClass("ActiveFlag");

    if (elem == "eng") {
      this.switchLanguage('en');
      localStorage.setItem("listItemSelected",elem);
    } else {
      this.switchLanguage('de');
      localStorage.setItem("listItemSelected",elem);
    }

  }

  switchLanguage(language) {
    this.translate.use(language);
    this._sharedService.changeLanguage(language);
    localStorage.setItem("language",language);
  }

}
