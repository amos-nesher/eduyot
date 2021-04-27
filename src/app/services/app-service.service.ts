import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class AppStateService {
    constructor(private storage: Storage) {

    }

    getShowAboutPage(): Promise<any> {
        return this.storage.get('showAboutPage');
    }

    setShowAboutPage(showAbout: boolean) {
        this.storage.set('showAboutPage', showAbout);
    }
}