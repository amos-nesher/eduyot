import { NgModule } from '@angular/core';
import { PlayAudioComponent } from './play-audio/play-audio';
import { CommunityDescriptionComponent } from './community-description/community-description';
import { BrowserModule } from '@angular/platform-browser';
import { ImageTitleComponent } from './image-title/image-title';
import { EduyotGroupComponent } from './eduyot-group/eduyot-group';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [
        PlayAudioComponent,
        CommunityDescriptionComponent,
        ImageTitleComponent,
        EduyotGroupComponent
    ],
	imports: [
        BrowserModule,
        IonicModule
    ],
	exports: [
        PlayAudioComponent,
        CommunityDescriptionComponent,
        ImageTitleComponent,
        EduyotGroupComponent
    ]
})
export class ComponentsModule {}
