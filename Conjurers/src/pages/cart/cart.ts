import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { AuthService } from "../../providers/auth-service/auth-service";

import { PaidPage } from '../paid/paid'
import { WelcomePage } from '../welcome/welcome'

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  private items: any;
  userData = { image: "" };
  constructor(
       public navCtrl: NavController,
            private navParams: NavParams,
                 private camera: Camera,
                 public authService: AuthService) {
    this.items = [
      {
        src: "assets/imgs/apple.jpg",
        price: 1,
        title: "Apple",
        amount: 0
      },
      {
        src: "assets/imgs/banana.jpg",
        price: 1,
        title: "Banana",
        amount: 0
      },
      {
        src: "assets/imgs/black_coke.jpg",
        price: 1,
        title: "Coke zero",
        amount: 0
      },
      {
        src: "assets/imgs/blue_oreos.jpg",
        price: 1,
        title: "Oreo Thins (original)",
        amount: 0
      },
      {
        src: "assets/imgs/cadbury.jpg",
        price: 1,
        title: "Cadbury Chocolate Fingers",
        amount: 0
      },
      {
        src: "assets/imgs/chex_mix.jpg",
        price: 1,
        title: "Chex Mix (Original)",
        amount: 0
      },
      {
        src: "assets/imgs/gray_coke.jpg",
        price: 1,
        title: "Diet coke",
        amount: 0
      },
      {
        src: "assets/imgs/hersheys.jpg",
        price: 1,
        title: "Hershey's drops",
        amount: 0
      },
      {
        src: "assets/imgs/m&ms.jpg",
        price: 1,
        title: "m&ms",
        amount: 0
      },
      {
        src: "assets/imgs/orange_chips.jpg",
        price: 1,
        title: "Sun Chips (Harvest Cheddar)",
        amount: 0
      },
      {
        src: "assets/imgs/pringles.jpg",
        price: 1,
        title: "Pringles (Sour Cream and Onion)",
        amount: 0
      },
      {
        src: "assets/imgs/red_coke.jpg",
        price: 1,
        title: "Coke (Original)",
        amount: 0
      },
      {
        src: "assets/imgs/yellow_oreos.jpg",
        price: 1,
        title: "Golden Oreo Thins",
        amount: 0
      }
    ]
    // this.camera();
  }

  pay() {

  }

  total() {
    let total: number;
    total = 0;
    for (let item of this.items) {
      total += item.price * item.amount;
    }
    return total;
  }

  takePicture() {
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
            this.items[result[0].index].amount++;
          },
          err => {}
        );
      },
      err => {
      }
    );
  }
}
