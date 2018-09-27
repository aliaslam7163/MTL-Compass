import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { DoYouHaveAPlaceToStayPage } from '../do-you-have-a-place-to-stay/do-you-have-a-place-to-stay';

/**
 * Generated class for the ShelterForWomenAndChildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shelter-for-women-and-child',
  templateUrl: 'shelter-for-women-and-child.html',
})
export class ShelterForWomenAndChildPage {
  menuView:boolean = false;
  backView:boolean = true;
  selectedOpt = "";
  mapQuery = "";
  organization =
    [
      {
              'id':'org1',
              'label': "Abri d'Espoir - Armée du Salut",
              'phone': '5149345615',
              'address': '2000 Notre-Dame St W, Montreal, QC H3J 1M8'
          },
          {
              'id':'org2',
              'label': 'Logifem',
              'phone': '5149393172',
              'address': '2235 St Jacques,  Montreal,  QC H3J 1H6'
          },
          {
              'id':'org3',
              'label': "La Dauphinelle",
              'phone': '5145980155',
              'address': ''
          }
    ]

  constructor(public navCtrl: NavController, public menuCtrl:MenuController, public callNumber:CallNumber, public IAB:InAppBrowser ) {
  }

  @ViewChild(Slides) slides: Slides;

  ionViewWillEnter()
  {
    this.menuView = this.slides.isBeginning();
    this.slides.lockSwipes(true);
    // console.log(this.menuView);
    // console.log(this.backView);
    // console.log(this.slides.getActiveIndex());

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
    // console.log(this.menuView);
    // console.log(this.backView);
    // console.log(this.slides.getActiveIndex());

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
    console.log("Slide Foward");
    this.slides.slideNext(200);
    this.slides.lockSwipes(true);
  }

  slideBack()
  {
    console.log("Slide Back");
    this.slides.lockSwipes(false);
    this.slides.slidePrev(200);
    this.slides.lockSwipes(true);
  }

  callOrg()
  {
    console.log("Insde the call Now Function");
    let targetOrg = this.organization.find(org =>
    org.label == this.selectedOpt
      );
    console.log(targetOrg.phone);
    this.callNumber.callNumber(targetOrg.phone, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
  }

  organizationOpt(e)
  {
    this.selectedOpt = e;
    this.mapQuery = this.selectedOpt.replace(' ','+')
    console.log(this.mapQuery);
  }

  openMap()
  {
    this.IAB.create("https://www.google.com/maps/search/?api=1&query="+this.mapQuery,'_system');
  }

  doYouHaveAPlaceToStay()
  {
    this.navCtrl.pop();
  }
}
