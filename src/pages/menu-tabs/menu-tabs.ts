import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu-tabs',
  templateUrl: 'menu-tabs.html'
})
export class MenuTabsPage {
  homeRoot = 'HomePage'
  trendRoot = 'TrendPage'
  accountRoot = 'AccountPage'
  constructor(public navCtrl: NavController) {}

}
