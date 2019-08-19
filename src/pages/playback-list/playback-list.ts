import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Community, Person, Subtitle, Playback } from '../../services/model';
import { EduyotService } from '../../services/eduyot.service';
import { PersonPage } from '../person/person';
import { CommunityInfoPage } from '../community-info/community-info';

/**
 * Generated class for the PlaybackListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-playback-list',
  templateUrl: 'playback-list.html',
})
export class PlaybackListPage {
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

  // doBack() {
  //   this.navCtrl.pop();
  // }

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

  onPlay(playback: Playback) {
    const audioElements = document.getElementsByTagName("audio");
    for (let i=0; i<audioElements.length; i++) {
      const audio = audioElements[i];
      if (audio.currentSrc.indexOf(encodeURI(playback.playbackFile)) === -1) {
        audio.pause();
      }
    }
  }
  
}
