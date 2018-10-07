import { Injectable } from "@angular/core";
import { recordsData } from "./records-data";

@Injectable()
export class RecordsService {

    getMainFolders(): string[] {
        return recordsData.map((folder) => {
            return folder.title;
        });
    }

    getFolderList(folder: string): string[] {
        return recordsData.filter(record => record.title === folder)[0].list
            .map(name => this.getFilePath(folder, name));
    }

    getFilePath(folder: string, filename: string) {
        return "assets/records/" + folder + "/" + filename + ".mp3";
    }
}