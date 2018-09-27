import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { DoYouHaveAPlaceToStayPage } from '../do-you-have-a-place-to-stay/do-you-have-a-place-to-stay';


@IonicPage()
@Component({
  selector: 'page-shelter-for-women',
  templateUrl: 'shelter-for-women.html',
})
export class ShelterForWomenPage {
  menuView:boolean = false;
  backView:boolean = true;
  selectedOpt = "";
  OrgMap = "";
  OrgPhone = '';
  Org:any;
  organization =
    [
      {
          'id':'org1',
          'label': 'Mission Old Brewery (Pavillon Patricia McKenzie)',
          'phone': '5145266446',
          'address': '1301 Boul. de Maisonneuve Est'
      },
      {
          'id':'org2',
          'label': 'Maison Marquerite',
          'phone': '5149322250',
          'address': ''
      },
      {
          'id':'org3',
          'label': "Rue des femmes",
          'phone': '5142849665',
          'address': '1050 Jeanne Mance St, Montreal, QC H2Z 1L7'
      },
      {
          'id':'org4',
          'label': "La Chaînon",
          'phone': '5148450151',
          'address': '4373 Esplanade Ave, Montreal, QC H2W 1T2'
      },
      {
          'id':'org5',
          'label': "Auberge Madeleine",
          'phone': '5145971499',
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

  organizationOpt(e)
  {
    this.selectedOpt = e;
    console.log(this.selectedOpt);
    this.Org = this.organization.find(org =>
      org.label == this.selectedOpt
    );
    console.log(this.Org);
  }

  callOrg()
  {

    console.log(this.Org.phone);
    this.callNumber.callNumber(this.Org.phone, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

    openMap()
    {
        console.log(this.Org.address);
        this.IAB.create("https://www.google.com/maps/search/?api=1&query="+this.Org.address,'_system');
    }

  doYouHaveAPlaceToStay()
  {
    this.navCtrl.pop();
  }


}
