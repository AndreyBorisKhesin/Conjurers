import { Component } from "@angular/core";
import { NavController, AlertController, ToastController } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { AuthService } from "../../providers/auth-service/auth-service";
// import {
//   FileTransfer,
//   FileUploadOptions,
//   FileTransferObject
// } from "@ionic-native/file-transfer";
// import { File } from "@ionic-native/file";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  private items: any;
  public photos: any;
  public base64Image: string;
  public fileImage: string;
  public responseData: any;
  public isError = false;
  public errCode = "";
  public msg = "";
   userData = { user_id: "", token: "", imageB64: "" };
  constructor(
	public navCtrl: NavController,
	private camera: Camera,
	private alertCtrl: AlertController,
	public toastCtrl: ToastController,
	public authService: AuthService
	//private transfer: FileTransfer, private file: File, private fileUploadOptions: FileUploadOptions
	) {
	this.items = [
   {
	src: "assets/imgs/apple.jpg",
	 price: 1,
	  title: "Apple",
	   amount: 0
	  },
	 {
	  src: "assets/imgs/banana.jpg",
	   price: 2,
title: "Banana",
 amount: 0
},
	   {
src: "assets/imgs/black_coke.jpg",
 price: 1,
  title: "Coke Zero",
   amount: 0
  },
 {
  src: "assets/imgs/blue_oreos.jpg",
   price: 3,
	title: "Oreo Thins",
	 amount: 0
	},
   {
	src: "assets/imgs/cadbury.jpg",
	 price: 2,
	  title: "Chocolate Fingers",
	   amount: 0
	  },

	  {
	   src: "assets/imgs/chex_mix.jpg",
price: 1,
 title: "Chex Mix",
  amount: 0
 },
{
 src: "assets/imgs/gray_coke.jpg",
  price: 1,
   title: "Diet Coke",
	amount: 0
   },
  {
   src: "assets/imgs/hersheys.jpg",
	price: 4,
	 title: "Hershey's Drops",
	  amount: 0
	 },
	{
	 src: "assets/imgs/m&ms.jpg",
	  price: 2,
	   title: "M&M's",
amount: 0
	   },
	  {
	   src: "assets/imgs/orange_chips.jpg",
price: 3,
 title: "Sun Chips",
  amount: 0
 },
{
 src: "assets/imgs/pringles.jpg",
  price: 3,
   title: "Pringles",
	amount: 0
	},

	{
	 src: "assets/imgs/red_coke.jpg",
	  price: 1,
	   title: "Coke",
amount: 0
	   },
	  {
	   src: "assets/imgs/yellow_oreos.jpg",
price: 5,
 title: "Golden Oreo Thins",
  amount: 0
 }
	  ]

	
	}
  //const fileTransfer = this.transfer.create();

  ngOnInit() {
	this.photos = [];
  }

  deletePhoto(index) {
	let confirm = this.alertCtrl.create({
	  title: "Sure you want to delete this photo? There is NO undo!",
	  message: "",
	  buttons: [
{
  text: "No",
  handler: () => {
	console.log("Disagree clicked");
  }
},
{
  text: "Yes",
  handler: () => {
	console.log("Agree clicked");
	this.photos.splice(index, 1);
  }
}
	  ]
	});
	confirm.present();
	}

	pay() {
	  let alert = this.alertCtrl.create({
	title: 'Checkout Successful!',
  subTitle: 'Thank you for shopping with us! Please check your purchases at the exit.',
buttons: ['OK']
	});
alert.present();
	}

  total() {
	   let total: number;
	total = 0;
 for (let item of this.items) {
total += item.price * item.amount;
	 }
  return total;
	 }

  takePhoto() {
	console.log("coming here");

	const options: CameraOptions = {
	  quality: 50,
	  destinationType: this.camera.DestinationType.DATA_URL,
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.PICTURE
	};

	this.camera.getPicture(options).then(
	  imageData => {
this.base64Image = "data:image/jpeg;base64," + imageData;
this.photos.push(this.base64Image);
this.photos.reverse();
this.sendData(imageData);
	  },
	  err => {
console.log(err);
	  }
	);
	}

	presentToast(name) {
let toast = this.toastCtrl.create({
	  message: name + ' was added to cart.',
	  duration: 3000,
	  position: "top"
});
	toast.present();
	  }
  sendData(imageData) {
  this.userData.imageB64 = imageData; 
  this.userData.user_id = "1";
  this.userData.token = "222"; 
  console.log(this.userData);
  this.authService.postData(imageData).then( 
  result => { 
	this.msg = "we have result " + result;
	this.items[result].amount++;
	this.presentToast(this.items[result].title)
  }, err => { 
	this.isError = true;
	this.errCode = err;
  }); }
}
