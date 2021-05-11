import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppStateService } from '../../services/app-service.service';
import { ABOUT, APP_SHORT_DESCRIPTION } from '../../services/data/about.data';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  public initialShow: boolean = false;
  public about = ABOUT;
  public appDescr = APP_SHORT_DESCRIPTION;

  constructor(public navCtrl: NavController, 
    private appStateService: AppStateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  continueToApp() {
    if (this.initialShow) {
      // save 'dont show about page' for next time.
      this.appStateService.setShowAboutPage(false);
    }

    this.navCtrl.navigateRoot('/communities');
  }
}
