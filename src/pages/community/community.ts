import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Community, Person } from '../../services/model';
import { PersonPage } from '../person/person';

/**
 * Generated class for the CommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})
export class CommunityPage {
  public community: Community;
  public showDescription: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.community = navParams.get("community");
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityPage');
  }

  gotoPerson(person: Person) {
    this.navCtrl.push(PersonPage, {person: person});
  }

}
