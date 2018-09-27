import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the IHaveAQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-i-have-a-question',
  templateUrl: 'i-have-a-question.html',
})
export class IHaveAQuestionPage {

  menuView:boolean = false;
backView:boolean = true;
emailAddr:string = '';
question:string = '';

constructor(public navCtrl: NavController, public menuCtrl:MenuController, public callNumber:CallNumber, public IAB:InAppBrowser, public emailComposer:EmailComposer ) {
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

sendEmail(){
  console.log(this.emailAddr + this.question);
  this.emailComposer.isAvailable().then((available: boolean) =>{
   if(available) {
     //Now we know we can send
   }
  });

  let email = {
    to: 'muhammedy.idris@gmail.com',
    cc: '',
    bcc: [this.emailAddr],
    attachments: [
    ],
    subject: 'Quetion from Refugee',
    body: this.question,
    isHtml: true
  };

  // Send a text message using default options
  this.emailComposer.open(email);
    }


}
