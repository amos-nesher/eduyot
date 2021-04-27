import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SubtitleCategoryPage } from './subtitle-category';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SubtitleCategoryPage
      }
    ]),
    ComponentsModule
  ],
  declarations: [SubtitleCategoryPage]
})
export class SubtitleCategoryPageModule {}
