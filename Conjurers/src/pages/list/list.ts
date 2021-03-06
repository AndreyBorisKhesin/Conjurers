import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { AuthService } from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public matches: any;
  private callback: any;
  userData = { image: "" };
  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private camera: Camera,
    public authService: AuthService
  ) {
  // this.takePhoto();
  }

  decrement(index: number) {
    if (this.matches[index].amount > 0) {
      this.matches[index].amount--;
    }
  }

  increment(index: number) {
    this.matches[index].amount++;
  }

  pop() {
    this.navCtrl.pop();
  }

  submit() {
    this.callback = this.navParams.get("callback")
    this.callback(this.matches).then(() => {
      this.navCtrl.pop();
    });
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      allowEdit: true,
      targetWidth: 320,
      targetHeight: 320,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.userData.image = imageData;
        this.authService.postData(this.userData).then(
          result => {
            this.matches = result;
          },
          err => {}
        );
      },
      err => {
        this.pop();
      }
    );
  }
}
