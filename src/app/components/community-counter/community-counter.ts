import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Community } from '../../services/model';

/**
 * Generated class for the CommunityCounterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'community-counter',
  templateUrl: 'community-counter.html',
  styleUrls: ['./community-counter.scss']
})
export class CommunityCounterComponent {
  @Input() community: Community;
  @Output() moreInfoRequested: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  askForMoreInfo() {
    this.moreInfoRequested.emit();
  }

  additionInfoStyle(): string {
    if (this.community.additionInfoColor) {
      return "color: "+this.community.additionInfoColor;
    } else {
      //return "color: #3999b9"
      return "color: white"
    }
  }
}
