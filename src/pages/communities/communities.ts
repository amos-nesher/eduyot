import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { EduyotService } from '../../services/eduyot.service';
import { Community } from '../../services/model';
import { PlaybackListPage } from '../playback-list/playback-list';
import { ABOUT, APP_SHORT_DESCRIPTION } from '../../services/data/about.data';
import { CommunityInfoPage } from '../community-info/community-info';
import { SubtitleCategoryPage } from '../subtitle-category/subtitle-category';

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
  @ViewChild("content") content: ViewChild;

  public readMore = false;
  public about = ABOUT;
  public appDescr = APP_SHORT_DESCRIPTION;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eduyotService: EduyotService) {
  }

  ionViewDidLoad() {
  }

  get communities(): Array<Community> {
    return this.eduyotService.getCommunities();
  }

  get camps(): Array<Community> {
    return this.eduyotService.getCamps();
  }

  openCommunity(community: Community) {
    if (community.subtitles.length > 0) {
      if (community.categoryView) {
        this.navCtrl.push(SubtitleCategoryPage, {community: community});
      }
      else {
        this.navCtrl.push(PlaybackListPage, {community: community});
      }
      
    }
    else {
      this.navCtrl.push(CommunityInfoPage, {community: community});
    }
    
  }

  doReadMore() {
    this.readMore = !this.readMore;

    // @ts-ignore
    this.content.scrollToTop();
  }
}
