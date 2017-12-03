import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { WelcomePage } from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;

  constructor(platform: Platform, statusBar: StatusBar, slashscreen: Splashscreen) {
    platform.ready().then(() => {
 
      statusBar.styleDefault();
      splashscreen.hide();
 
    });
  }
}

