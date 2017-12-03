import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  constructor(public navCtrl: NavController) {}

  storeSelected() {
    this.navCtrl.push(CartPage);
  }
}
