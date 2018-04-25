import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AuthLoginPage } from '../auth/auth.login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  countries: any;
  errorMessage: string;
  constructor(public navCtrl: NavController, public rest: RestProvider) {

  }

  ionViewDidLoad() {
    this.getCountries();
  }

  getCountries() {
    this.rest.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }

  redirectToLoginPage = ()=>{ this.navCtrl.push(AuthLoginPage) }
}
