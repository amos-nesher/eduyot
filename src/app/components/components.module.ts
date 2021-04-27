import { NgModule } from '@angular/core';
import { PlayAudioComponent } from './play-audio/play-audio';
import { CommunityDescriptionComponent } from './community-description/community-description';
import { ImageTitleComponent } from './image-title/image-title';
import { EduyotGroupComponent } from './eduyot-group/eduyot-group';
import { CommunityCounterComponent } from './community-counter/community-counter';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
        PlayAudioComponent,
        CommunityDescriptionComponent,
        ImageTitleComponent,
        EduyotGroupComponent,
    CommunityCounterComponent
    ],
	imports: [
        IonicModule,
        CommonModule
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
