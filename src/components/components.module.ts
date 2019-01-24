import { NgModule } from '@angular/core';
import { PlayAudioComponent } from './play-audio/play-audio';
import { CommunityDescriptionComponent } from './community-description/community-description';
import { PlayListComponent } from './play-list/play-list';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
	declarations: [
        PlayAudioComponent,
        CommunityDescriptionComponent,
        PlayListComponent
    ],
	imports: [
        BrowserModule
    ],
	exports: [
        PlayAudioComponent,
        CommunityDescriptionComponent,
        PlayListComponent
    ]
})
export class ComponentsModule {}
