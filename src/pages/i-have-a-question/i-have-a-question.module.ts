import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IHaveAQuestionPage } from './i-have-a-question';

@NgModule({
  declarations: [
    IHaveAQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(IHaveAQuestionPage),
  ],
})
export class IHaveAQuestionPageModule {}
