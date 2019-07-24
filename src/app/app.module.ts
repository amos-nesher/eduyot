import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { RecordsService } from '../services/records.service';
import { EduyotService } from '../services/eduyot.service';
import { CommunitiesPage } from '../pages/communities/communities';
import { PersonPage } from '../pages/person/person';
import { AboutPage } from '../pages/about/about';
import { AppStateService } from '../services/app-service.service';
import { PlaybackListPage } from '../pages/playback-list/playback-list';
import { CommunityInfoPage } from '../pages/community-info/community-info';
import { SubtitleCategoryPage } from '../pages/subtitle-category/subtitle-category';
import { SubtitlePlaylistPage } from '../pages/subtitle-playlist/subtitle-playlist';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CommunitiesPage,
    PersonPage,
    PlaybackListPage,
    CommunityInfoPage,
    SubtitleCategoryPage,
    SubtitlePlaylistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CommunitiesPage,
    PersonPage,
    PlaybackListPage,
    CommunityInfoPage,
    SubtitleCategoryPage,
    SubtitlePlaylistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecordsService,
    EduyotService,
    AppStateService
  ]
})
export class AppModule {}
