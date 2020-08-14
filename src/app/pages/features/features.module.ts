import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './features.routing';

import { FEATURES_COMPONENTS } from './components';
import { SharedModule } from '../../shared/shared.module';

// ********************** angular-modal-gallery *****************************
import { GalleryModule } from '@ks89/angular-modal-gallery';
// **************************************************************************

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule,
    GalleryModule
  ],
  declarations: [
    FEATURES_COMPONENTS
  ]
})
export class FeaturesModule {}
