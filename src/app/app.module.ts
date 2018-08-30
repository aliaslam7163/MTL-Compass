import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EmailComposer } from '@ionic-native/email-composer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ApplyForWorkPermitPage } from '../pages/apply-for-work-permit/apply-for-work-permit';
import { IHaveAQuestionPage } from '../pages/i-have-a-question/i-have-a-question';
import { ImmigrationMedicalExamPage } from '../pages/immigration-medical-exam/immigration-medical-exam';
import { LastResortAssistancePage } from '../pages/last-resort-assistance/last-resort-assistance';
import { ShelterForEveryonePage } from '../pages/shelter-for-everyone/shelter-for-everyone';
import { ShelterForWomenPage } from '../pages/shelter-for-women/shelter-for-women';
import { ShelterForWomenAndChildPage } from '../pages/shelter-for-women-and-child/shelter-for-women-and-child';
import { DoYouHaveAPlaceToStayPage } from '../pages/do-you-have-a-place-to-stay/do-you-have-a-place-to-stay';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ApplyForWorkPermitPage,
    IHaveAQuestionPage,
    ImmigrationMedicalExamPage,
    LastResortAssistancePage,
    ShelterForEveryonePage,
    ShelterForWomenPage,
    ShelterForWomenAndChildPage,
    DoYouHaveAPlaceToStayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ApplyForWorkPermitPage,
    DoYouHaveAPlaceToStayPage,
    IHaveAQuestionPage,
    ImmigrationMedicalExamPage,
    LastResortAssistancePage,
    ShelterForEveryonePage,
    ShelterForWomenPage,
    ShelterForWomenAndChildPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    InAppBrowser,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
