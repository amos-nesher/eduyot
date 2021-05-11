import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subtitle, Community, Person, Playback } from '../../services/model';
import { EduyotService } from '../../services/eduyot.service';
import { PersonPage } from '../person/person';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Generated class for the SubtitlePlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-subtitle-playlist',
  templateUrl: 'subtitle-playlist.html',
  styleUrls: ['./subtitle-playlist.scss'],
})
export class SubtitlePlaylistPage {
  public community: Community;
  public subtitle: Subtitle;
  public showDescription: boolean = false;

  constructor(public navCtrl: NavController, private route: ActivatedRoute, private router: Router,
    private eduyotService: EduyotService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.community = this.router.getCurrentNavigation().extras.state.community;
        this.subtitle = this.router.getCurrentNavigation().extras.state.subtitle;
      }
    });
  }

  ionViewDidLoad() {

  }

  backButtonColor(): string {
    if (this.subtitle.backButtonColor) {
      return '--color: '+ this.subtitle.backButtonColor
    } else {
      return '--color: white'
    }
  }

  imageLink(): string {
    if (this.subtitle.image) {
      return 'assets/imgs/' + this.subtitle.image;
    }

    return '';
  }

  getPerson(personId) {
    return this.eduyotService.getPerson(personId);
  }

  gotoPerson(person: Person) {
    // this.navCtrl.push(PersonPage, {person: person});
    this.navCtrl.navigateForward('/person', {state: {person}});
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

  gotoSubtitleInfo() {
    if (this.subtitle.description) {
      this.navCtrl.navigateForward('/community-info', {state: {subtitle: this.subtitle}});
    }
  }

  additionInfoStyle(): string {
    if (this.community.additionInfoColor) {
      return "color: "+this.community.additionInfoColor;
    } else {
      return "color: #fff"
    }
  }
}
