import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Community, Person } from '../../services/model';
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

  doBack() {
    this.navCtrl.pop();
  }

}
