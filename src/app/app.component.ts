import { Component, ViewChild } from '@angular/core';

import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ApplyForWorkPermitPage } from '../pages/apply-for-work-permit/apply-for-work-permit';
import { IHaveAQuestionPage } from '../pages/i-have-a-question/i-have-a-question';
import { ImmigrationMedicalExamPage } from '../pages/immigration-medical-exam/immigration-medical-exam';
import { LastResortAssistancePage } from '../pages/last-resort-assistance/last-resort-assistance';
import { ShelterForEveryonePage } from '../pages/shelter-for-everyone/shelter-for-everyone';
import { ShelterForWomenPage } from '../pages/shelter-for-women/shelter-for-women';
import { ShelterForWomenAndChildPage } from '../pages/shelter-for-women-and-child/shelter-for-women-and-child';
import { DoYouHaveAPlaceToStayPage } from '../pages/do-you-have-a-place-to-stay/do-you-have-a-place-to-stay';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    /* This section is made for menu navigation. Add or subtract pages using the given examples below */
    this.pages = [
      {title:'Home', component:HomePage, icon:"home"},
      {title:'Apply for work permit', component:ApplyForWorkPermitPage, icon:"briefcase"},
      {title:'I have a question', component:IHaveAQuestionPage, icon:"help"},
      {title:'Schedule Medical Exam', component:ImmigrationMedicalExamPage, icon:"heart"},
      {title:'Apply for Welfare', component:LastResortAssistancePage, icon:"cash"},
      {title:'Find temporary shelter', component:DoYouHaveAPlaceToStayPage, icon:"home"},
    ];
  }

  openPage(page)
  {
    this.nav.setRoot(page.component);
  }
}
