import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Community } from '../../services/model';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.community = navParams.get("community");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityInfoPage');
  }

}
