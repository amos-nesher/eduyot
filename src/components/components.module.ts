import { NgModule } from '@angular/core';
import { PlayAudioComponent } from './play-audio/play-audio';
import { CommunityDescriptionComponent } from './community-description/community-description';
import { PlayListComponent } from './play-list/play-list';
import { BrowserModule } from '@angular/platform-browser';
import { ImageTitleComponent } from './image-title/image-title';
@NgModule({
	declarations: [
        PlayAudioComponent,
        CommunityDescriptionComponent,
        PlayListComponent,
    ImageTitleComponent
    ],
	imports: [
        BrowserModule
    ],
	exports: [
        PlayAudioComponent,
        CommunityDescriptionComponent,
        PlayListComponent,
    ImageTitleComponent
    ]
})
export class ComponentsModule {}
