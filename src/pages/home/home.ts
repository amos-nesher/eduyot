import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecordsService } from '../../services/records.service';
import { PlayFolderPage } from '../play-folder/play-folder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public mainFolders: Array<string>;

  constructor(public navCtrl: NavController, public recordsService: RecordsService) {

  }

  get folders(): string[] {
    return this.recordsService.getMainFolders();
  }

  openFolder(folder: string) {
    this.navCtrl.push(PlayFolderPage, {folder: folder});
  }

  folderCount(folder: string) {
    return this.recordsService.getFolderCount(folder);
  }
}
