import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { RestProvider } from '../providers/rest/rest';
import { DefaultRequestOptions } from '../providers/defaultRequestOptions';
import { AuthProvider } from '../providers/auth/auth.provider';
import { TrendPageModule } from '../pages/trend/trend.module';
import { AccountPageModule } from '../pages/account/account.module';
import { HomePageModule } from '../pages/home/home.module';
import { MenuTabsPageModule } from '../pages/menu-tabs/menu-tabs.module';
import { AuthLoginPage } from '../pages/auth/auth.login';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { FilterPopOverPageModule } from '../pages/filter-pop-over/filter-pop-over.module';

@NgModule({
  declarations: [MyApp, AuthLoginPage],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AccountPageModule,
    TrendPageModule,
    HomePageModule,
    MenuTabsPageModule,
    SettingsPageModule,
    FilterPopOverPageModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, AuthLoginPage],
  providers: [
    StatusBar,
    SplashScreen,
    RestProvider,
    AuthProvider,
    IonicErrorHandler,
    [{ provide: BaseRequestOptions, useClass: DefaultRequestOptions }]
  ]
})
export class AppModule { }
