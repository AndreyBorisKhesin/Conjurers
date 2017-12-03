import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';i
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private options: CameraPreviewOptions;
  private cameraPreview: CameraPreview;
 
  constructor(public navCtrl: NavController) {
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
  }

  ionViewWillLoad() {
    document.getElementsByTagName('html')[0].style.visibility = 'hidden';
  }
 
  ionViewWillLeave() {
    document.getElementsByTagName('html')[0].style.visibility = 'visible';
  }
 
}
