import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './features.routing';

import { FEATURES_COMPONENTS } from './components';
import { SharedModule } from '../../shared/shared.module';

// ********************** angular-modal-gallery *****************************
import { GalleryModule } from '@ks89/angular-modal-gallery';
// **************************************************************************

// import { NgxPageScrollModule, PageScrollConfig } from 'ngx-page-scroll';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule,
    // NgxPageScrollModule,
    GalleryModule // no for root here
  ],
  declarations: [
    FEATURES_COMPONENTS
  ]
})
export class FeaturesModule {
  constructor() {
    // PageScrollConfig.defaultScrollOffset = 30;
    // PageScrollConfig.defaultDuration = 200;
    // PageScrollConfig.defaultInterruptible = false;
  }
}
