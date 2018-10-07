import { Component, Input } from '@angular/core';

/**
 * Generated class for the PlayAudioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'play-audio',
  templateUrl: 'play-audio.html'
})
export class PlayAudioComponent {
  @Input() filePath: string;
  
  constructor() {
  }

  get fileName(): string {
    const arr: string[] = this.filePath.split("/");
    const name: string = arr[arr.length-1];
    return name.substring(0, name.length-4);
  }

}
