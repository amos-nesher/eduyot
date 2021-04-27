import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NavController, Platform } from '@ionic/angular';
import { AppStateService } from './services/app-service.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
}) 
export class AppComponent {
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    private navController: NavController,
    appStateService: AppStateService) {
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
  
        // appStateService.getShowAboutPage().then((showAbout) => {
        //   if (showAbout === null || showAbout === true) {
        //     //this.rootPage = AboutPage;
        //     this.navController.navigateRoot('/about');
        //   }
        //   else {
        //     //this.rootPage = CommunitiesPage;
        //     this.navController.navigateRoot('/communities');
        //   }
        // });
      });
      
    }
}

