import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AboutPage } from './pages/about/about';
import { CommunitiesPage } from './pages/communities/communities';
import { CommunityInfoPage } from './pages/community-info/community-info';
import { PersonPage } from './pages/person/person';
import { PlaybackListPage } from './pages/playback-list/playback-list';
import { SubtitleCategoryPage } from './pages/subtitle-category/subtitle-category';
import { SubtitlePlaylistPage } from './pages/subtitle-playlist/subtitle-playlist';
import { ComponentsModule } from './components/components.module';
import { AppStateService } from './services/app-service.service';
import { EduyotService } from './services/eduyot.service';
import { RecordsService } from './services/records.service';
import { IonicStorageModule } from '@ionic/storage';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    ComponentsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    RecordsService,
    EduyotService,
    AppStateService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
