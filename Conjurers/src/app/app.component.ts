import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';

import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  private options: CameraPreviewOptions;
  private cameraPreview: CameraPreview;

  rootPage:any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
 
      StatusBar.styleDefault();
      Splashscreen.hide();
 
      this.options = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: 'rear',
        toBack: true,
        tapPhoto: false,
        previewDrag: false
      };
 
      this.cameraPreview.startCamera(this.options);
 
    });
  }
}
