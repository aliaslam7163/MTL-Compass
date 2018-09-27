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
  OrgMap = "";
  OrgPhone = '';
  Org:any;

  organization =
      [
        {
            'id':'org1',
            'label': 'Clinique Médicale Luso (Dr. Munoz)',
            'phone': '5148492391',
            'address': '1 Avenue du Mont-Royal Est, Montreal, QC H2T 1N4'
        },
        {
            'id':'org2',
            'label': 'Groupe Santé Medisys Inc. (Dr. Belisle)',
            'phone': '5148451211',
            'address': '600 Sherbrooke Ouest, Montreal, QC H3A0A3'
        },
        {
            'id':'org3',
            'label': "Clinique Médicale Abikhzer (Dre. Myriam Abikhzer)",
            'phone': '5147330987',
            'address': '5950 Cote-des-Neiges, Suite 300, Montreal, QC H3S1Z8'
        },
        {
            'id':'org4',
            'label': "Clinique de Médicine Industrielle et Préventive Du Québec (Dre. Doina Nica-Danes)",
            'phone': '5149310801',
            'address': '1665 Ste-Catherine Ouest, Montreal, QC H3H1L9'
        },
        {
            'id':'org5',
            'label': "Polyclinique Maisonneueve Rosemont (Dr. Morel)",
            'phone': '5142672857',
            'address': "5345 Boulevard de L'Assomption, Suite 2010, Montreal, QC, H1T4B3"
        },
        {
            'id':'org6',
            'label': "Plein Ciel Medical Clinic",
            'phone': '5147391662',
            'address': "475 Bouelevard Côte-Vertu, Montreal, QC H4L1X7"
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
              this.slides.slideNext(70);
              this.slides.lockSwipes(true);
            }

            slideBack()
            {
              this.slides.lockSwipes(false);
              this.slides.slidePrev(700);
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

              lastResortAssist()
              {
                this.navCtrl.push(LastResortAssistancePage,{},{animate:true,direction:'forward'});
              }
}
