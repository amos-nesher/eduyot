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
  @Input() community: Community; 

  constructor() {
  }

  get imageLink(): string {
    if (this.community.titleImage) {
      return 'assets/imgs/' + this.community.titleImage;
    }

    return '';
  }
  

}
