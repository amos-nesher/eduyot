//import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
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
  templateUrl: 'play-audio.html',
  styleUrls: ['play-audio.scss']
})
export class PlayAudioComponent {
  @Input() playback: Playback;
  @Input() person: Person;
  @Output() showPerson: EventEmitter<Person> = new EventEmitter<Person>();
  @Output() play: EventEmitter<Playback> = new EventEmitter<Playback>();
  
  constructor() {
  }

  get mp3FileName(): string {
    return "assets/records/" + this.playback.playbackFile + ".mp3";
  }

  gotoPerson() {
    this.showPerson.emit(this.person);
  }

  getImage() {
    if (this.person.image) {
      return "assets/persons-imgs/" + this.person.image;
    }
  }

  get imageExists(): boolean {
    return !!this.person.image;
  }

  doPlay() {
    this.play.emit(this.playback);
  }
}
