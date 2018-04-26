import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AuthLoginPage } from '../auth/auth.login';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Tabs</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content></ion-content>
  `
})
class TabsTextContentPage {
  constructor() { }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  tab1: TabsTextContentPage;
  tab2: TabsTextContentPage;
  constructor(public navCtrl: NavController, public rest: RestProvider) {
    this.tab1 = new TabsTextContentPage();
    this.tab2 = new TabsTextContentPage();
  }

  ionViewDidLoad() { }

  redirectToLoginPage = () => { console.log('call '); this.navCtrl.push(AuthLoginPage) }
}
