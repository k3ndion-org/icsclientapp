import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { TrendPage } from '../pages/trend/trend';
import { AccountPage } from '../pages/account/account';
import { MenuTabsPage } from '../pages/menu-tabs/menu-tabs';
import { AuthLoginPage } from '../pages/auth/auth.login';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild('myTabs') tabRef: MenuTabsPage;

  menuTabs:any = MenuTabsPage
  homeRoot :any = HomePage
  trendRoot :any= TrendPage
  accountRoot :any = AccountPage
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Login', component: AuthLoginPage },
      { title: 'Settings', component: SettingsPage }
    ];
  }
  
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

