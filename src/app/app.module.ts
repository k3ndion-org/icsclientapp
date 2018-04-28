import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { DefaultRequestOptions } from '../services/defaultRequestOptions';
import { AuthService } from '../services/auth/auth.provider';
import { TrendPageModule } from '../pages/trend/trend.module';
import { AccountPageModule } from '../pages/account/account.module';
import { HomePageModule } from '../pages/home/home.module';
import { MenuTabsPageModule } from '../pages/menu-tabs/menu-tabs.module';
import { LoginPage } from '../pages/auth/login';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { FilterPopOverPageModule } from '../pages/filter-pop-over/filter-pop-over.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { fireBaseConfig } from '../firebase.config';
import { LoginPageModule } from '../pages/auth/login.module';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupPageModule } from '../pages/auth/signup.module';
import { EventService } from '../services/event/event.service';

@NgModule({
  declarations: [MyApp],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AccountPageModule,
    TrendPageModule,
    HomePageModule,
    MenuTabsPageModule,
    SettingsPageModule,
    FilterPopOverPageModule,
    AngularFireModule.initializeApp(fireBaseConfig.fire),
    AngularFireDatabaseModule,
    LoginPageModule,
    SignupPageModule,
    NgxErrorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    EventService,
    IonicErrorHandler,
    [{ provide: BaseRequestOptions, useClass: DefaultRequestOptions }],
    AngularFireAuth
  ]
})
export class AppModule { }
