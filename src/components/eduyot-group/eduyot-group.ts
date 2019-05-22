import { Component, Input } from '@angular/core';
import { Community } from '../../services/model';

/**
 * Generated class for the EduyotGroupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'eduyot-group',
  templateUrl: 'eduyot-group.html'
})
export class EduyotGroupComponent {
  _community: Community;
  personCount = 0;
  eduyotCount = 0;

  private persons = {};

  @Input() 
  set community(community: Community) {
    this._community = community;

    community.subtitles.forEach((subtitle) => {
      subtitle.playbacks.forEach((playback) => {
        if (! this.persons[playback.personId]) {
          this.persons[playback.personId] = 1;
          this.personCount++;
        }

        this.eduyotCount++;
      });  
    });
  }

  constructor() {
  }

  

}
