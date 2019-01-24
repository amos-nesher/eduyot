import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecordsService } from '../../services/records.service';

/**
 * Generated class for the PlayFolderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-play-folder',
  templateUrl: 'play-folder.html',
})
export class PlayFolderPage {
  public folder: string;
  public showDescription: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private recordsService: RecordsService) {
    this.folder = navParams.get("folder");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayFolderPage');
  }

  showHideDescription() {
    this.showDescription = !this.showDescription;
  }

  get filesList(): string[] {
    return this.recordsService.getFolderList(this.folder);
  }
 
  get folderDescription(): string {
    return this.recordsService.getFolderDescription(this.folder);
  }

  get descriptionButtonTitle(): string {
    return this.showDescription ? "סגור הסבר" : "הצג הסבר";
  }

}
