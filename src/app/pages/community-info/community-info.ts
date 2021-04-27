import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Community, Subtitle } from '../../services/model';

/**
 * Generated class for the CommunityInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-community-info',
  templateUrl: 'community-info.html',
  styleUrls: ['./community-info.scss'],
})
export class CommunityInfoPage {
  public community: Community;
  public subtitle: Subtitle;
  
  constructor(public navCtrl: NavController, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.community = this.router.getCurrentNavigation().extras.state.community;
        this.subtitle = this.router.getCurrentNavigation().extras.state.subtitle;
      }
    });
  }

  get title(): string {
    if (this.community) {
      return this.community.name;
    }

    else if (this.subtitle) {
      return this.subtitle.title;
    }
  }

  get infoHtml(): any {
    if (this.community) {
      return this.community.description;
    }

    else if (this.subtitle && this.subtitle.description) {
      return this.subtitle.description;
    }
  }
}
