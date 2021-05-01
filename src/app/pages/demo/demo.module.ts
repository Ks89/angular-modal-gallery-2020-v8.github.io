import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './demo.routing';

import { DEMO_COMPONENTS } from './components';
import { SharedModule } from '../../shared/shared.module';

import { CodemirrorModule } from '@ks89/ngx-codemirror';

// ********************** angular-modal-gallery *****************************
import { GalleryModule } from '@ks89/angular-modal-gallery';
// **************************************************************************

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule,
    FormsModule,
    CodemirrorModule,
    GalleryModule
  ],
  declarations: [
    DEMO_COMPONENTS
  ]
})
export class DemoModule {
}
