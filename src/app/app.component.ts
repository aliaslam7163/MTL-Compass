import { Component, ViewChild } from '@angular/core';

import { Platform, Nav, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ApplyForWorkPermitPage } from '../pages/apply-for-work-permit/apply-for-work-permit';
import { IHaveAQuestionPage } from '../pages/i-have-a-question/i-have-a-question';
import { ImmigrationMedicalExamPage } from '../pages/immigration-medical-exam/immigration-medical-exam';
import { LastResortAssistancePage } from '../pages/last-resort-assistance/last-resort-assistance';
import { ShelterForEveryonePage } from '../pages/shelter-for-everyone/shelter-for-everyone';
import { DoYouHaveAPlaceToStayPage } from '../pages/do-you-have-a-place-to-stay/do-you-have-a-place-to-stay';
import { SplashPage } from '../pages/splash/splash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any, icon:string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl:ModalController ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.hide(); //Commnetd out to allow display of our custom splash screen
      //let splash = modalCtrl.create(SplashPage);
      //splash.present();
      //modalCtrl.create(SplashPage).present();
    });

    /* This section is made for menu navigation. Add or subtract pages using the given examples below */
    modalCtrl.create(SplashPage).present();
    this.pages = [
      {title:'Find temporary shelter', component:DoYouHaveAPlaceToStayPage, icon:"home"},
      {title:'Schedule Medical Exam', component:ImmigrationMedicalExamPage, icon:"heart"},
      {title:'Apply for work permit', component:ApplyForWorkPermitPage, icon:"briefcase"},
      {title:'Apply for Welfare', component:LastResortAssistancePage, icon:"cash"},
      {title:'I have a question', component:IHaveAQuestionPage, icon:"help"}
    ];
  }
  /* Each Menu Button is attached to a (click) function called openPage(x)  which once clicked will run this function here */
  openPage(page)
  {
    this.nav.setRoot(page.component);
  }
}
