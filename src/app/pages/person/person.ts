import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
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
  styleUrls: ['./person.scss'],
})
export class PersonPage {
  public person: Person;
  public eduyotCount = 0;

  constructor(public navCtrl: NavController, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.person = this.router.getCurrentNavigation().extras.state.person;
      }
    });
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
