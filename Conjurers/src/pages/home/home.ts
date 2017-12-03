import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { AuthService } from "../../providers/auth-service/auth-service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public base64Image: string;
  public fileImage: string;
  public responseData: any;
  userData = { user_id: "", token: "", imageB64: "" };
  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private alertCtrl: AlertController,
    public authService: AuthService
  ) {}

  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.sendData(imageData);
      },
      err => {
        console.log(err);
      }
    );
  }

  sendData(imageData) {
    this.userData.imageB64 = imageData;
    this.userData.user_id = "1";
    this.userData.token = "222";
    console.log(this.userData);
    this.authService.postData(this.userData, "userImage").then(
      result => {
        this.responseData = result;
      }, err => {});
  }
}
