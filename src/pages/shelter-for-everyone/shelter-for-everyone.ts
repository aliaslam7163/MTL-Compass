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
          'label': 'La Maisonnée',
          'phone': '5142713533',
          'address': '6865 Ave Christophe-Colomb, Montreal, QC H2S 2H3'
      },
      {
          'id':'org2',
          'label': 'CANA',
          'phone': '5143820735',
          'address': '10780 Rue Laverdure, Montréal, QC H3L 2L9'
      },
      {
          'id':'org3',
          'label': "Comité d'aide aux réfugiés",
          'phone': '5142726060',
          'address': '518 Rue Beaubien E, Montreal, QC H2S 1S5'
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
    this.IAB.create("https://www.google.com/maps/search/?api=1&query="+this.mapQuery);
  }

  doYouHaveAPlaceToStay()
  {
    this.navCtrl.pop();
  }




}
