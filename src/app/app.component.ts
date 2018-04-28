import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { TrendPage } from '../pages/trend/trend';
import { AccountPage } from '../pages/account/account';
import { MenuTabsPage } from '../pages/menu-tabs/menu-tabs';
import { LoginPage } from '../pages/auth/login';
import { SettingsPage } from '../pages/settings/settings';
import { AuthService } from '../services/auth/auth.provider';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild('myTabs') tabRef: MenuTabsPage;

  menuTabs: any = MenuTabsPage
  homeRoot: any = HomePage
  trendRoot: any = TrendPage
  accountRoot: any = AccountPage
  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.auth.afAuth.authState
        .subscribe(user => {
          if (user) { this.homeRoot = HomePage; } else { this.homeRoot = LoginPage; }
        }, () => { this.homeRoot = LoginPage; });

    });

    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Settings', component: SettingsPage }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  login() {
    this.auth.signOut();
    this.nav.setRoot(LoginPage);
  }
  logout() {
    this.auth.signOut();
    this.nav.setRoot(HomePage);
  }
}

