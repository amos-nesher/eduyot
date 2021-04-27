import { Component, Input } from '@angular/core';

/**
 * Generated class for the ImageTitleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'image-title',
  templateUrl: 'image-title.html',
  styleUrls: ['./image-title.scss']
})
export class ImageTitleComponent {
  @Input() title: string;
  @Input() imageSrc: string;

  constructor() {
  }

}
