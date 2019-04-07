import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EduyotService } from '../../services/eduyot.service';
import { Community } from '../../services/model';
import { CommunityPage } from '../community/community';
import { CommunityPlacePage } from '../community-place/community-place';

/**
 * Generated class for the CommunitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-communities',
  templateUrl: 'communities.html',
})
export class CommunitiesPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private eduyotService: EduyotService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunitiesPage');
  }

  get communities(): Array<Community> {
    return this.eduyotService.getCommunities();
  }

  get camps(): Array<Community> {
    return this.eduyotService.getCamps();
  }

  openCommunity(community: Community) {
    this.navCtrl.push(CommunityPlacePage, {community: community});
  }
}
