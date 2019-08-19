import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Subtitle, Community, Person, Playback } from '../../services/model';
import { EduyotService } from '../../services/eduyot.service';
import { PersonPage } from '../person/person';

/**
 * Generated class for the SubtitlePlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-subtitle-playlist',
  templateUrl: 'subtitle-playlist.html',
})
export class SubtitlePlaylistPage {
  public community: Community;
  public subtitle: Subtitle;
  public showDescription: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private eduyotService: EduyotService) {
    this.community = navParams.get("community");
    this.subtitle = navParams.get("subtitle");
  }

  ionViewDidLoad() {
  
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
    this.navCtrl.push(PersonPage, {person: person});
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
