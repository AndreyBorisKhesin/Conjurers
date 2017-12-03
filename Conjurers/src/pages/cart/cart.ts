import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListPage } from '../list/list'
import { PaidPage } from '../paid/paid'
import { WelcomePage } from '../welcome/welcome'

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  private amounts: any;

  constructor(public navCtrl: NavController) {
    this.items = [
      {
        src: "../assets/imgs/images_for_products/apple.jpg",
        price: 1,
        title: "Apple",
        amount: 0
      },
      {
        src: "../assets/imgs/images_for_products/banana.jpg",
        price: 1,
        title: "Banana",
        amount: 0
      },
      {
        src: "../assets/imgs/images_for_products/black_coke.jpg",
        price: 1,
        title: "Coke zero",
        amount: 0
      },
      {
        src: "../assets/imgs/images_for_products/blue_oreos.jpg",
        price: 1,
        title: "Oreo Thins (original)",
        amount: 0
      },
      {
        src: "../assets/imgs/images_for_products/cadbury.jpg",
        price: 1,
        title: "Cadbury Chocolate Fingers",
        amount: 0
      },
      {
        src: "../assets/imgs/images_for_products/chex_mix.jpg",
        price: 1,
        title: "Chex Mix (Original)",
        amount: 0
      },
      {
        src: "../assets/imgs/images_for_products/gray_coke.jpg",
        price: 1,
        title: "Diet coke",
        amount: 0
      },
      {
        src: "../assets/imgs/images_for_products/hersheys.jpg",
        price: 1,
        title: "Hershey's drops",
        amount: 0
      },
      {
        src: "../assets/imgs/images_for_products/m&ms.jpg",
        price: 1,
        title: "m&ms",
        amount: 0
      },
      {
        src: "../assets/imgs/images_for_products/orange_chips.jpg",
        price: 1,
        title: "Sun Chips (Harvest Cheddar)",
        amount: 0
      },
      {
        src: "../assets/imgs/images_for_products/pringles.jpg",
        price: 1,
        title: "Pringles (Sour Cream and Onion)",
        amount: 0
      },
      {
        src: "../assets/imgs/images_for_products/red_coke.jpg",
        price: 1,
        title: "Coke (Original)",
        amount: 0
      },
      {
        src: "../assets/imgs/images_for_products/yellow_oreos.jpg",
        price: 1,
        title: "Golden Oreo Thins",
        amount: 0
      }
    ]
    camera();
  }

  camera() {
    this.navCtrl.push(ListPage, {
      callback: function(params) {
        return new Promise((resolve, reject) => {
          for (let match in params) {
            this.items[match.index].amount += match.amount
          }
          resolve();
        });
      }
    })
  }

  pay() {
    
  }

  total() {
    total: number;
    total = 0;
    for (let item in this.items) {
      total += item.price * item.amount;
    }
  }
}
