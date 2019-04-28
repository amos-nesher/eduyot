import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Community, Subtitle } from '../../services/model';
import { PlayListPage } from '../play-list/play-list';

/**
 * Generated class for the CommunityPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-community-place',
  templateUrl: 'community-place.html',
})
export class CommunityPlacePage {
  public community: Community;
  public showDescription: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.community = navParams.get("community");
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityPlacePage');
  }


  gotoPlaylist(subtitle: Subtitle) {
    this.navCtrl.push(PlayListPage, {
      community: this.community,
      subtitle: subtitle
    });
  }
}
