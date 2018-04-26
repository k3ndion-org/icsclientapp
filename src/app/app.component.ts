import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  tabs: Array<{}> = [
    { title: 'HomePage', name: 'TabsControllerPage', component: null, tabComponent: null, index: 1, icon: 'calendar' },
    { title: 'Sign Out', name: 'SignInPage', component: null, tabComponent: null, index: 1, icon: 'contacts' },
    { title: 'My Profile', name: 'TabsControllerPage', component: null, tabComponent: null, index: 3, icon: 'map' }
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private navCtr: NavController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

openPage(page) {
    let params = {};
    if (page.index) {
      params = { tabIndex: page.index };
    }

    this.navCtr.setRoot(page.component, params);
  }
}

