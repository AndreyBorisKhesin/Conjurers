import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { WelcomePage } from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;

  constructor(platform: Platform) {
  platform.ready().then(() => {
    });
  }
}

