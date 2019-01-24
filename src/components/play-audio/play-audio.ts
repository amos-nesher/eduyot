import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Playback, Person } from '../../services/model';

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
  @Input() folder: string;
  @Input() playback: Playback;
  @Input() person: Person;
  @Output() showPerson: EventEmitter<Person> = new EventEmitter<Person>();
  
  constructor() {
  }

  get mp3FileName(): string {
    return "assets/records/" + this.folder + "/" + this.playback.playbackFile + ".mp3";
  }

  gotoPerson() {
    this.showPerson.emit(this.person);
  }

}
