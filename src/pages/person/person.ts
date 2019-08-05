import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Person } from '../../services/model';

/**
 * Generated class for the PersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  public person: Person;
  public eduyotCount = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = navParams.get("person");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }

  get hasImage(): boolean {
    return !!this.person.image;
  }

  getImage() {
    return "assets/persons-imgs/" + this.person.image;

  }
}
