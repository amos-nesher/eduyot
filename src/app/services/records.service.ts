import { Injectable } from "@angular/core";
import { recordsData } from "./records-data";
import { RecordFolder } from "./records-data.1";

@Injectable()
export class RecordsService {

    getMainFolders(): string[] {
        return recordsData.map((folder) => {
            return folder.title;
        });
    }

    getFolder(name: string): RecordFolder {
        return recordsData.filter(record => record.title === name)[0]; 
    }

    getFolderList(folder: string): string[] {
        return this.getFolder(folder)
            .list.map(name => this.getFilePath(folder, name));
    }

    getFolderCount(folder: string): number {
        return this.getFolder(folder).list.length;
    }

    getFolderDescription(folder: string): string {
        return this.getFolder(folder).description;
    }

    getFilePath(folder: string, filename: string) {
        return "assets/records/" + folder + "/" + filename + ".mp3";
    }
}