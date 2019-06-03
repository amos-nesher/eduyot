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
  @Input() header: boolean = false;
  @Input() community: Community; 

  constructor() {
  }

  

}
