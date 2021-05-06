import { Component } from '@angular/core';
import { Community, Person, Subtitle } from '../../services/model';
import { EduyotService } from '../../services/eduyot.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Generated class for the SubtitleCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-subtitle-category',
  templateUrl: 'subtitle-category.html',
  styleUrls: ['./subtitle-category.scss'],
})
export class SubtitleCategoryPage {
  public community: Community;
  public showDescription: boolean = false;

  constructor(public navCtrl: NavController,
    private route: ActivatedRoute, private router: Router,
    private eduyotService: EduyotService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.community = this.router.getCurrentNavigation().extras.state.community;
      }
    });
  }

  additionInfoStyle(): string {
    if (this.community.additionInfoColor) {
      return "color: "+this.community.additionInfoColor;
    } else {
      //return "color: #3999b9"
      return "color: white"
    }
  }

  ionViewDidLoad() {

  }

  getPerson(personId) {
    return this.eduyotService.getPerson(personId);
  }

  gotoPerson(person: Person) {
    //this.navCtrl.push(PersonPage, {person: person});
    this.navCtrl.navigateForward('/person', {state: {person}});
  }

  gotoMoreInfoPage() {
    //this.navCtrl.push(CommunityInfoPage, {community: this.community});
    this.navCtrl.navigateForward('/community-info', {state: {community: this.community}});
  }

  gotoSubtitleInfo(subtitle: Subtitle) {
    if (subtitle.description) {
      //this.navCtrl.push(CommunityInfoPage, {subtitle: subtitle});
      this.navCtrl.navigateForward('/community-info', {state: {subtitle}});
    }
  }

  gotoSubtitle(subtitle: Subtitle) {
    if (this.community.categoryView) {
      // this.navCtrl.push(SubtitlePlaylistPage, {
      //   community: this.community,
      //   subtitle: subtitle
      // });
      this.navCtrl.navigateForward('/subtitle-playlist',
        {
          state: {
            community: this.community,
            subtitle: subtitle
          }
        }
      );
    }
    else if (subtitle.description) {
      //this.navCtrl.push(CommunityInfoPage, {subtitle: subtitle});
      this.navCtrl.navigateForward('/community-info', {state: {subtitle}});
    }
  }

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

}
