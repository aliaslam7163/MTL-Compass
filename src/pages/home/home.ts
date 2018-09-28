import { Component, ViewChild } from '@angular/core';

import { NavController,Nav } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { DoYouHaveAPlaceToStayPage } from '../do-you-have-a-place-to-stay/do-you-have-a-place-to-stay';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  greeting:string = '';
  @ViewChild(Nav) nav:Nav;

  constructor(public navCtrl: NavController, public menuCtrl:MenuController) {
    console.log("Inside of Home");
    var time = new Date().getHours();
    if (time < 10)
    {
      this.greeting = "Good morning";
    }
    else if (time < 20)
    {
      this.greeting = "Good afternoon";
    }
    else
    {
      this.greeting = "Good evening";
    }
  }
  ionViewWillEnter(){}

  openMenu()
  {
    this.menuCtrl.open();
  }

  doYouHaveAPlaceToStay()
  {

    this.navCtrl.setRoot(DoYouHaveAPlaceToStayPage);
    //window.location.reload();
  }

}
