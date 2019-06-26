import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { Community, Subtitle } from '../../services/model';

/**
 * Generated class for the CommunityInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-community-info',
  templateUrl: 'community-info.html',
})
export class CommunityInfoPage {
  public community: Community;
  public subtitle: Subtitle;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.community = navParams.get("community");
    this.subtitle = navParams.get("subtitle");
  }

  get title(): string {
    if (this.community) {
      return this.community.name;
    }

    else if (this.subtitle) {
      return this.subtitle.title;
    }
  }

  get infoHtml(): any {
    if (this.community) {
      return this.community.description;
    }

    else if (this.subtitle && this.subtitle.description) {
      return this.subtitle.description;
    }
  }
}
