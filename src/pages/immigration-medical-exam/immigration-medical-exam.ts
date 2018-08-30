import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { LastResortAssistancePage } from '../last-resort-assistance/last-resort-assistance';

/**
 * Generated class for the ImmigrationMedicalExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-immigration-medical-exam',
  templateUrl: 'immigration-medical-exam.html',
})
export class ImmigrationMedicalExamPage {

  backView:boolean = true;
menuView:boolean = false;
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

constructor(public navCtrl: NavController, public menuCtrl: MenuController,
            public callNumber: CallNumber, public IAB: InAppBrowser) {}


            @ViewChild(Slides) slides:Slides;

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
              this.slides.slideNext(200);
              this.slides.lockSwipes(true);
            }

            slideBack()
            {
              this.slides.lockSwipes(false);
              this.slides.slidePrev(200);
              this.slides.lockSwipes(true);
            }

            callOrg()
            {
              let targetOrg = this.organization.find(org =>
                org.label == this.selectedOpt
              );
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

              lastResortAssist()
              {
                this.navCtrl.push(LastResortAssistancePage);
              }
}
