import { NgModule } from '@angular/core';
import { PlayAudioComponent } from './play-audio/play-audio';
import { CommunityDescriptionComponent } from './community-description/community-description';
import { BrowserModule } from '@angular/platform-browser';
import { ImageTitleComponent } from './image-title/image-title';
import { EduyotGroupComponent } from './eduyot-group/eduyot-group';
import { IonicModule } from 'ionic-angular';
import { CommunityCounterComponent } from './community-counter/community-counter';
@NgModule({
	declarations: [
        PlayAudioComponent,
        CommunityDescriptionComponent,
        ImageTitleComponent,
        EduyotGroupComponent,
    CommunityCounterComponent
    ],
	imports: [
        BrowserModule,
        IonicModule
    ],
	exports: [
        PlayAudioComponent,
        CommunityDescriptionComponent,
        ImageTitleComponent,
        EduyotGroupComponent,
    CommunityCounterComponent
    ]
})
export class ComponentsModule {}
