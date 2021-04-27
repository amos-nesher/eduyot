import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'communities',
    loadChildren: () => import('./pages/communities/communities.module').then( m => m.CommunitiesPageModule)
  },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  // },
  {
    path: 'community-info',
    loadChildren: () => import('./pages/community-info/community-info.module').then( m => m.CommunityInfoPageModule)
  },
  {
    path: 'person',
    loadChildren: () => import('./pages/person/person.module').then( m => m.PersonPageModule)
  },
  {
    path: 'playback-list',
    loadChildren: () => import('./pages/playback-list/playback-list.module').then( m => m.PlaybackListPageModule)
  },
  {
    path: 'subtitle-category',
    loadChildren: () => import('./pages/subtitle-category/subtitle-category.module').then( m => m.SubtitleCategoryPageModule)
  },
  {
    path: 'subtitle-playlist',
    loadChildren: () => import('./pages/subtitle-playlist/subtitle-playlist.module').then( m => m.SubtitlePlaylistPageModule)
  },
  {
    path: '',
    redirectTo: 'communities',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
