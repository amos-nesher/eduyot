import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subtitle, Person } from '../../services/model';
import { EduyotService } from '../../services/eduyot.service';

/**
 * Generated class for the PlayListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'play-list',
  templateUrl: 'play-list.html'
})
export class PlayListComponent {
  @Input() subtitle: Subtitle;
  @Output() showPerson: EventEmitter<Person> = new EventEmitter<Person>();
  
  constructor(private eduyotService: EduyotService) {
  }

  getPerson(personId) {
    return this.eduyotService.getPerson(personId);
  }

  gotoPerson(person: Person) {
    this.showPerson.emit(person);
  }
 
}
