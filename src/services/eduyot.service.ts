import { Injectable } from "@angular/core";
import { KEHILOT_DATA, CAMPS_DATA } from "./data/eduyot.data";
import { Community, Person } from "./model";
import { PERSON_DATA, getAnonymousPerson } from "./data/person.data";

@Injectable()
export class EduyotService {
    constructor() {
        this.init();
    }

    private init() {
        // Initialize all persons playback count
        const personsId = Object.keys(PERSON_DATA);
        personsId.forEach( personId => {
            PERSON_DATA[personId].playbackCount = 0;
        });

        this.countMetaData(this.getCommunities());
        this.countMetaData(this.getCamps());      
    }

    private countMetaData(group: Array<Community>) {
        // For each community count the persons and playbacks.
        // For each person, count his playbacks

        group.forEach(community => {
            const communityPersons = {};

            community.personCount = 0;
            community.playbackCount = 0;

            community.subtitles.forEach((subtitle) => {
                subtitle.playbacks.forEach((playback) => {
                  if (! communityPersons[playback.personId]) {
                    communityPersons[playback.personId] = 1;

                    // count community persos
                    community.personCount++;
                  }

                  // count person playbacks
                  PERSON_DATA[playback.personId].playbackCount++;
          
                  // count commumity playback;
                  community.playbackCount++;
                });  
              });
        });
    }

    getCommunities(): Array<Community> {
        return KEHILOT_DATA;
    }

    getCamps(): Array<Community> {
        return CAMPS_DATA;
    }

    getPerson(personId: string): Person {
        return PERSON_DATA[personId] || getAnonymousPerson(personId);
    }

    getRandomPersons(count: number): Array<Person> {
        const personsArray = Object.keys(PERSON_DATA);
        const personKeys = [];
        const result = new Array<Person>();
        let i = 0;

        while (i < count) {
            let personKey = personsArray[Math.floor(Math.random()*personsArray.length)];
            
            if (! personKeys.includes(personKey) && PERSON_DATA[personKey].image) {
                personKeys.push(personKey);
                i++;
            }
        }

        personKeys.forEach(pk => {
            result.push(PERSON_DATA[pk]);
        });

        return result;
    }
}