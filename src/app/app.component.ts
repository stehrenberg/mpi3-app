import {Component, ViewChild} from '@angular/core';
import {Nav, Platform } from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {MainPage} from "../pages/main/main";


@Component({
  templateUrl: 'app.html'
})
export class App {
  rootPage = MainPage;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
