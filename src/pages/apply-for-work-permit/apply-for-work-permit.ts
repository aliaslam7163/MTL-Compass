import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ApplyForWorkPermitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply-for-work-permit',
  templateUrl: 'apply-for-work-permit.html',
})
export class ApplyForWorkPermitPage {

  backView:boolean = true;
      menuView:boolean = false;

      constructor(public navCtrl: NavController, public callNumber:CallNumber, public IAB:InAppBrowser, public menuCtrl:MenuController) {
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

      call(){
        console.log("hello calling now");
        this.callNumber.callNumber("18882422100", true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
      }

      reDirect()
      {
        const options: InAppBrowserOptions = {
          hidenavigationbuttons : 'no',
          toolbar : 'no',
          hardwareback:'yes',
          disallowoverscroll: 'no'

        }
        this.IAB.create("https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html",'_self',options);
      }




  }
