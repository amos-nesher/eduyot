import { Component, Input } from '@angular/core';
import { Community } from '../../services/model';

/**
 * Generated class for the CommunityCounterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'community-counter',
  templateUrl: 'community-counter.html'
})
export class CommunityCounterComponent {
  @Input() community: Community;

  constructor() {
  }

}
