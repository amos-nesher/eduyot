import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CommunityInfoPage } from './community-info';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CommunityInfoPage
      }
    ]),
    ComponentsModule
  ],
  declarations: [CommunityInfoPage]
})
export class CommunityInfoPageModule {}
