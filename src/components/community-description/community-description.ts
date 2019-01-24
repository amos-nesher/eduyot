import { Component, Input } from '@angular/core';

/**
 * Generated class for the CommunityDescriptionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'community-description',
  templateUrl: 'community-description.html'
})
export class CommunityDescriptionComponent {
  @Input() description: string;

  public showDescription: boolean = false;

  constructor() {
  }

  showHideDescription() {
    this.showDescription = !this.showDescription;
  }

  get descriptionButtonTitle(): string {
    return this.showDescription ? "סגור הסבר" : "הצג הסבר";
  }

}
