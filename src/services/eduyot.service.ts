import { Injectable } from "@angular/core";
import { KEHILOT_DATA, CAMPS_DATA } from "./data/eduyot.data";
import { Community, Person } from "./model";
import { PERSON_DATA, getAnonymousPerson } from "./data/person.data";

@Injectable()
export class EduyotService {
    getCommunities(): Array<Community> {
        return KEHILOT_DATA;
    }

    getCamps(): Array<Community> {
        return CAMPS_DATA;
    }

    getPerson(personId: string): Person {
        return PERSON_DATA[personId] || getAnonymousPerson(personId);
    }
}