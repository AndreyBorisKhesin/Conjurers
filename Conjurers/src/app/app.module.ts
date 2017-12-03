import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http';
import { AuthService } from '../providers/auth-service/auth-service';
import { WelcomePage } from '../pages/welcome/welcome';
import { CartPage } from '../pages/cart/cart';
import { ListPage } from '../pages/list/list';
import { PaidPage } from '../pages/paid/paid';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    CartPage,
    ListPage,
    PaidPage,
    HomePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    CartPage,
    ListPage,
    PaidPage,
    HomePage
  ],
  providers: [
  AuthService,
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
