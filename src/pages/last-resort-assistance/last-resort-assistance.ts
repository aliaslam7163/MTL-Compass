import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ApplyForWorkPermitPage } from '../apply-for-work-permit/apply-for-work-permit';

/**
 * Generated class for the LastResortAssistancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-last-resort-assistance',
  templateUrl: 'last-resort-assistance.html',
})
export class LastResortAssistancePage {
  backView:boolean = true;
  menuView:boolean = false;

    constructor(public navCtrl: NavController, public callNumber:CallNumber, public IAB:InAppBrowser, public menuCtrl:MenuController ) {

    }
    @ViewChild(Slides) slides: Slides;

    ionViewWillEnter()
  {
    this.menuView = this.slides.isBeginning();
    this.slides.lockSwipes(true);

    if(this.slides.getActiveIndex() > 0)
    {
      this.backView = false;
    }
    else
    {
      this.backView = true;
    }
  }
  slideChanged()
  {
    this.menuView = this.slides.isBeginning();

    if(this.slides.getActiveIndex() > 0)
    {
      this.backView = false;
    }
    else
    {
      this.backView = true;
    }
  }
    openMenu()
    {
      this.menuCtrl.open();
    }
    slide()
    {
      this.slides.lockSwipes(false);
      console.log("hello world");
      this.slides.slideNext(200);
      this.slides.lockSwipes(true);
    }

    slideBack()
    {
      this.slides.lockSwipes(false);
      this.slides.slidePrev(200);
      this.slides.lockSwipes(true);
    }

    reDirect()
    {
      this.IAB.create("http://www.emploiquebec.gouv.qc.ca/en/citizens/obtaining-financial-assistance/social-assistance-and-social-solidarity-programs/#c169");
    }

    applyForWorkPermit()
    {
      this.navCtrl.push(ApplyForWorkPermitPage);
    }

    callOrg()
    {
      console.log("Insde the call Now Function");
      this.callNumber.callNumber('+15148728838', true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }

    openMap()
    {
      this.IAB.create("https://www.google.com/maps/search/?api=1&query=287+Rue+Notre-Dame+Ouest,+Montréal,+QC+H2Y+1T8");
    }

}
