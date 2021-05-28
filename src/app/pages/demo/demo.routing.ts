import { RouterModule, Routes } from '@angular/router';

import { ArraySimpleComponent } from './array-simple/array-simple.component';
import { DemoComponent } from './demo.component';
import { DownloadSimpleComponent } from './download-simple/download-simple.component';
import { DownloadAdvancedComponent } from './download-advanced/download-advanced.component';
import { OutputEventsComponent } from './output-events/output-events.component';
import { AddImageArrayComponent } from './add-image-array/add-image-array.component';
import { DescriptionCustomComponent } from './description-custom/description-custom.component';
import { DescriptionFullCustomComponent } from './description-full-custom/description-full-custom.component';
import { CloseOusideComponent } from './close-outside/close-outside.component';
import { KeyboardConfigComponent } from './keyboard-config/keyboard-config.component';
import { InfiniteSlidingComponent } from './infinite-sliding/infinite-sliding.component';
import { NoDotsAndPreviewsComponent } from './no-dots-and-previews/no-dots-and-previews.component';
import { SidePreviewsHiddenComponent } from './side-previews-hidden/side-previews-hidden.component';
import { OnlyCurrentImgComponent } from './only-current-img/only-current-img.component';
import { PreviewsCustomSizeComponent } from './previews-custom-size/previews-custom-size.component';
import { LoadingSpinnerDisableComponent } from './loading-spinner-disable/loading-spinner-disable.component';
import { LoadingSpinnerTypeComponent } from './loading-spinner-type/loading-spinner-type.component';
import { PreviewsLengthComponent } from './previews-length/previews-length.component';
import { PreviewsNotClickableComponent } from './previews-not-clickable/previews-not-clickable.component';
import { PreviewsNoArrowsComponent } from './previews-no-arrows/previews-no-arrows.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { ButtonsCustomFaComponent } from './buttons-custom-fa/buttons-custom-fa.component';
import { ButtonsStrategiesComponent } from './buttons-strategies/buttons-strategies.component';
import { ButtonsExturlNewtabComponent } from './buttons-exturl-newtab/buttons-exturl-newtab.component';
import { PlainGalleryLayoutsComponent } from './plain-gallery-layouts/plain-gallery-layouts.component';
import { PlainGalleryAtagsComponent } from './plain-gallery-atags/plain-gallery-atags.component';
import { PlainGalleryImagePointerComponent } from './plain-gallery-image-pointer/plain-gallery-image-pointer.component';
import { PlainGalleryCustomWithDescComponent } from './plain-gallery-custom-with-desc/plain-gallery-custom-with-desc.component';
import { AutoCloseAndAutoUpdateComponent } from './auto-close-and-auto-update/auto-close-and-auto-update.component';
import { Base64Component } from './base64/base64.component';
import { DownloadCustomFilenameComponent } from './download-custom-filename/download-custom-filename.component';
import { InvertSwipeComponent } from './invert-swipe/invert-swipe.component';
import { CarouselMinimalComponent } from './carousel-minimal/carousel-minimal.component';
import { CarouselFixedComponent } from './carousel-fixed/carousel-fixed.component';
import { CarouselContentProjectionComponent } from './carousel-content-projection/carousel-content-projection.component';
import { CarouselFeaturesDisablesComponent } from './carousel-features-disables/carousel-features-disables.component';
import { CarouselNoAutoplayComponent } from './carousel-no-autoplay/carousel-no-autoplay.component';
import { CarouselNoInfiniteComponent } from './carousel-no-infinite/carousel-no-infinite.component';
import { CarouselCustomAutoplayComponent } from './carousel-custom-autoplay/carousel-custom-autoplay.component';
import { CarouselCustomPreviewsComponent } from './carousel-custom-previews/carousel-custom-previews.component';
import { CarouselWithDescriptionComponent } from './carousel-with-description/carousel-with-description.component';
import { CarouselOutputsComponent } from './carousel-outputs/carousel-outputs.component';
import { CarouselBreakpointsComponent } from './carousel-breakpoints/carousel-breakpoints.component';
import { SameImagesComponent } from './same-images/same-images.component';
import { ModalAutoplayMinimalComponent } from './modal-autoplay-minimal/modal-autoplay-minimal.component';
import { ModalAutoplayCustomComponent } from './modal-autoplay-custom/modal-autoplay-custom.component';

export const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {path: '', component: ArraySimpleComponent},
      {path: 'array-simple', component: ArraySimpleComponent},
      {path: 'output-events', component: OutputEventsComponent},
      {path: 'add-image-array', component: AddImageArrayComponent},

      {path: 'no-dots-and-previews', component: NoDotsAndPreviewsComponent},
      {path: 'side-previews-hidden', component: SidePreviewsHiddenComponent},
      {path: 'only-current-img', component: OnlyCurrentImgComponent},

      {path: 'close-outside', component: CloseOusideComponent},
      {path: 'download-simple', component: DownloadSimpleComponent},
      {path: 'download-advanced', component: DownloadAdvancedComponent},
      {path: 'download-custom-filename', component: DownloadCustomFilenameComponent},

      {path: 'infinite-sliding', component: InfiniteSlidingComponent},

      {path: 'loading-spinner-disable', component: LoadingSpinnerDisableComponent},
      {path: 'loading-spinner-type', component: LoadingSpinnerTypeComponent},

      {path: 'keyboard-config', component: KeyboardConfigComponent},
      {path: 'description-strategy', component: DescriptionCustomComponent},
      {path: 'description-full-custom', component: DescriptionFullCustomComponent},

      {path: 'previews-custom-size', component: PreviewsCustomSizeComponent},
      {path: 'previews-length', component: PreviewsLengthComponent},
      {path: 'previews-no-arrows', component: PreviewsNoArrowsComponent},
      {path: 'previews-not-clickable', component: PreviewsNotClickableComponent},

      {path: 'buttons-strategies', component: ButtonsStrategiesComponent},
      {path: 'buttons-exturl-newtab', component: ButtonsExturlNewtabComponent},
      {path: 'buttons-custom-fa', component: ButtonsCustomFaComponent},

      {path: 'plain-layouts', component: PlainGalleryLayoutsComponent},
      {path: 'plain-atags', component: PlainGalleryAtagsComponent},
      {path: 'plain-image-pointer', component: PlainGalleryImagePointerComponent},
      {path: 'plain-custom-desc', component: PlainGalleryCustomWithDescComponent},

      {path: 'accessibility', component: AccessibilityComponent},
      {path: 'auto-close-and-auto-update', component: AutoCloseAndAutoUpdateComponent},
      {path: 'base64', component: Base64Component},
      {path: 'invert-swipe', component: InvertSwipeComponent},
      {path: 'same-images', component: SameImagesComponent},

      {path: 'autoplay-minimal', component: ModalAutoplayMinimalComponent},
      {path: 'autoplay-custom', component: ModalAutoplayCustomComponent},

      {path: 'carousel', component: CarouselMinimalComponent},
      {path: 'carousel-fixed', component: CarouselFixedComponent},
      {path: 'carousel-content-projection', component: CarouselContentProjectionComponent},
      {path: 'carousel-features-disable', component: CarouselFeaturesDisablesComponent},
      {path: 'carousel-noautoplay', component: CarouselNoAutoplayComponent},
      {path: 'carousel-noinfinite', component: CarouselNoInfiniteComponent},
      {path: 'carousel-custom-autoplay', component: CarouselCustomAutoplayComponent},
      {path: 'carousel-custom-previews', component: CarouselCustomPreviewsComponent},
      {path: 'carousel-with-description', component: CarouselWithDescriptionComponent},
      {path: 'carousel-outputs', component: CarouselOutputsComponent},
      {path: 'carousel-breakpoints', component: CarouselBreakpointsComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
