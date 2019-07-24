import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Community, Person, Subtitle } from '../../services/model';
import { EduyotService } from '../../services/eduyot.service';
import { PersonPage } from '../person/person';
import { CommunityInfoPage } from '../community-info/community-info';
import { SubtitlePlaylistPage } from '../subtitle-playlist/subtitle-playlist';

/**
 * Generated class for the SubtitleCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-subtitle-category',
  templateUrl: 'subtitle-category.html',
})
export class SubtitleCategoryPage {
  public community: Community;
  public showDescription: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private eduyotService: EduyotService) {
    this.community = navParams.get("community");
  }

  ionViewDidLoad() {
  
  }

  getPerson(personId) {
    return this.eduyotService.getPerson(personId);
  }

  gotoPerson(person: Person) {
    this.navCtrl.push(PersonPage, {person: person});
  }

  gotoMoreInfoPage() {
    this.navCtrl.push(CommunityInfoPage, {community: this.community});
  }

  gotoSubtitleInfo(subtitle: Subtitle) {
    if (subtitle.description) {
      this.navCtrl.push(CommunityInfoPage, {subtitle: subtitle});
    }
  }

  gotoSubtitle(subtitle: Subtitle) {
    if (this.community.categoryView) {
      this.navCtrl.push(SubtitlePlaylistPage, {
        community: this.community,
        subtitle: subtitle
      });
    }
    else if (subtitle.description) {
      this.navCtrl.push(CommunityInfoPage, {subtitle: subtitle});
    }
  }

  imageLink(): string {
    if (this.community.titleImage) {
      return 'assets/imgs/' + this.community.titleImage;
    }

    return '';
  }

  subTitleImageLink(image: String): string {
    if (image) {
      return 'assets/imgs/' + image;
    }
      
    return '';
  }
  
}
