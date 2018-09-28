import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { App } from 'ionic-angular';
import { ImmigrationMedicalExamPage } from '../immigration-medical-exam/immigration-medical-exam';
import { ShelterForWomenPage } from '../shelter-for-women/shelter-for-women';
import { ShelterForWomenAndChildPage } from '../shelter-for-women-and-child/shelter-for-women-and-child';
import { ShelterForEveryonePage } from '../shelter-for-everyone/shelter-for-everyone';

//import { DoYouHaveAPlaceToStayPage } from '../do-you-have-a-place-to-stay/do-you-have-a-place-to-stay';

/**
 * Generated class for the DoYouHaveAPlaceToStayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-do-you-have-a-place-to-stay',
  templateUrl: 'do-you-have-a-place-to-stay.html',
})
export class DoYouHaveAPlaceToStayPage {
  backView:boolean = true;
  menuView:boolean = false;

  constructor(public navCtrl: NavController, public callNumber:CallNumber, public IAB:InAppBrowser, public menuCtrl:MenuController, public app:App) {
  }

  @ViewChild(Slides) slides: Slides;

  ionViewWillEnter()
  {
    this.menuView = this.slides.isBeginning();
    this.slides.lockSwipes(true);
    console.log(this.app.getActiveNav().getActive().id);
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
    console.log(this.navCtrl.canGoBack());
    if(this.navCtrl.canGoBack())
    {
      this.navCtrl.pop();
    }
    else
    {
      this.menuCtrl.open();
    }
  }
  slide()
  {
    this.slides.lockSwipes(false);
    console.log("Slide Foward");
    this.slides.slideNext(700);
    this.slides.lockSwipes(true);
  }

  slideBack()
  {
    console.log("Slide Back");
    this.slides.lockSwipes(false);
    this.slides.slidePrev(700);
    this.slides.lockSwipes(true);
  }

  immmigrationMedicalExam(){
    this.navCtrl.push(ImmigrationMedicalExamPage,{},{animate:true,direction:'forward'});
  }

  shelterForWomen(){
    this.navCtrl.push(ShelterForWomenPage,{},{animate:true,direction:'forward'});
  }

  shelterForWomenAndChildren(){
      this.navCtrl.push(ShelterForWomenAndChildPage,{},{animate:true,direction:'forward'});
  }

  shelterForEveryone(){
      this.navCtrl.push(ShelterForEveryonePage,{},{animate:true,direction:'forward'});
  }

}
