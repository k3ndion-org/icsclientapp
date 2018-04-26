import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, IonicPage } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth.provider';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class AuthLoginPage {
  errorMessage: string;
  loading: any;
  registerCredentials = { email: '', password: '' }; 
  constructor(public navCtrl: NavController,
    private authProvider: AuthProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {  }

  ionViewDidLoad() { }

  login(email: string, password: string) {
    this.authProvider.login(email, password)
      .subscribe(data => {
        if (data) {
          this.navCtrl.push(HomePage);
        }
        else {this.showError("Access Denied.")}
      },
        error => this.errorMessage = <any>error);
  }

  redirectToSignUpPage = () => { this.navCtrl.push("Sign Up") }
  redirectToForgotPasswordPage = () => { this.navCtrl.push("Forgot Password") }

  private showLoading = () => {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  private showError = (text) => {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
  }
}
