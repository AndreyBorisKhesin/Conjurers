import { Component } from '@angular/core';

import { CameraPage } from '../camera/camera';
import { CartPage } from '../cart/cart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CameraPage;
  tab2Root = CartPage;

  constructor() {

  }
}
