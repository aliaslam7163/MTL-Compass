import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { DoYouHaveAPlaceToStayPage } from '../do-you-have-a-place-to-stay/do-you-have-a-place-to-stay';

/**
 * Generated class for the ShelterForEveryonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shelter-for-everyone',
  templateUrl: 'shelter-for-everyone.html',
})
export class ShelterForEveryonePage {

  menuView:boolean = false;
  backView:boolean = true;
  selectedOpt = "";
  mapQuery = "";
  organization =
    [
      {
              'id':'org1',
              'label': 'Mission Old Brewery (Pavilion Webster)',
              'phone': '5147982244',
              'address': '915 Clark St Montreal, QC H2Z 1J2'
          },
          {
              'id':'org2',
              'label': 'Mission Bon Accueil (Pavilion Macaulay - Mission des hommes)',
              'phone': '5149356396',
              'address': '1490 Saint-Antoine St W Montreal, QC H3C 1C3'
          },
          {
              'id':'org3',
              'label': "Maison du Pére",
              'phone': '5148450168',
              'address': '550 Boulevard René-Lévesque E Montréal, QC H2L 2L3'
          },
          {
              'id':'org4',
              'label': "Le Bunker",
              'phone': '5145140029',
              'address': ''
          },
          {
              'id':'org5',
              'label': "Refuge des Jeunes de Montreal",
              'phone': '5148494221',
              'address': '1836 St Catherine St E Montreal, QC H2K 2H3'
          }
    ]

  constructor(public navCtrl: NavController, public menuCtrl:MenuController, public callNumber:CallNumber, public IAB:InAppBrowser ) {
    console.log("Inside of Shelter for everyone");
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
    if(this.callNumber.isCallSupported())
    {
      this.callNumber.callNumber(targetOrg.phone, true)
          .then(res => console.log('Launched dialer!', res))
          .catch(err => console.log('Error launching dialer', err));
    }
    else
      console.log("Calling not supported");

  }

  organizationOpt(e)
  {
    this.selectedOpt = e;
    this.mapQuery = this.selectedOpt.replace(' ','+')
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
