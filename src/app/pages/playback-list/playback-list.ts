//import { Component, ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { Community, Person, Subtitle, Playback } from '../../services/model';
import { EduyotService } from '../../services/eduyot.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Generated class for the PlaybackListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-playback-list',
  templateUrl: 'playback-list.html',
  styleUrls: ['./playback-list.scss'],
})
export class PlaybackListPage {
  public community: Community;
  public showDescription: boolean = false;

  constructor(public navCtrl: NavController, private route: ActivatedRoute, private router: Router,
    private eduyotService: EduyotService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.community = this.router.getCurrentNavigation().extras.state.community;
      }
    });
  }

  ionViewDidLoad() {

  }

  getPerson(personId) {
    return this.eduyotService.getPerson(personId);
  }

  gotoPerson(person: Person) {
    this.navCtrl.navigateForward('/person', {state: {person}});
  }

  gotoMoreInfoPage() {
    this.navCtrl.navigateForward('/community-info', {state: {community: this.community}});
  }

  gotoSubtitleInfo(subtitle: Subtitle) {
    if (subtitle.description) {
      this.navCtrl.navigateForward('/community-info', {state: {subtitle}});
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
