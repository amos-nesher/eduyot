import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Community, Subtitle, Person } from '../../services/model';
import { EduyotService } from '../../services/eduyot.service';
import { PersonPage } from '../person/person';

/**
 * Generated class for the PlayListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-play-list',
  templateUrl: 'play-list.html',
})
export class PlayListPage {
  //@Output() showPerson: EventEmitter<Person> = new EventEmitter<Person>();
  
  public community: Community;
  public subtitle: Subtitle;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private eduyotService: EduyotService) {
    this.community = navParams.get("community");
    this.subtitle = navParams.get("subtitle");
  }

  ionViewDidLoad() {
    
  }

  getPerson(personId) {
    return this.eduyotService.getPerson(personId);
  }

  gotoPerson(person: Person) {
    this.navCtrl.push(PersonPage, {person: person});
  }
}
