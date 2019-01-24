import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppStateService } from '../services/app-service.service';
import { HomePage } from '../pages/home/home';
import { CommunitiesPage } from '../pages/communities/communities';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;// AboutPage; //CommunitiesPage; //HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    appStateService: AppStateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      platform.setDir('rtl', true);

      appStateService.getShowAboutPage().then((showAbout) => {
        if (showAbout === null || showAbout === true) {
          this.rootPage = AboutPage;
        }
        else {
          this.rootPage = CommunitiesPage;
        }
      });
    });
  }
}

