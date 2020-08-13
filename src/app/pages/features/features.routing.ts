import { Routes, RouterModule } from '@angular/router';

import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import { FeaturesComponent } from './features.component';
import { KeyboardConfigComponent } from './keyboard-config/keyboard-config.component';
import { InputDefaultValuesComponent } from './input-default-values/input-default-values.component';
import { PlainGalleryComponent } from './plain-gallery/plain-gallery.component';
import { PreviewsComponent } from './previews/previews.component';
import { UpperButtonsComponent } from './upper-buttons/upper-buttons.component';
import { OverviewComponent } from './overview/overview.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { CommonComponent } from './common/common.component';
import { LibConfigComponent } from './lib-config/lib-config.component';
import { DescriptionComponent } from './description/description.component';

export const routes: Routes = [
  { path: '',
    component: FeaturesComponent,
    children: [
      { path: '',                        component: OverviewComponent },
      { path: 'common',                  component: CommonComponent },
      { path: 'lib-config',              component: LibConfigComponent },
      { path: 'description',             component: DescriptionComponent },
      { path: 'accessibility',           component: AccessibilityComponent },
      { path: 'modal-gallery',           component: ModalGalleryComponent },
      { path: 'plain-gallery',           component: PlainGalleryComponent },
      { path: 'carousel',                component: CarouselComponent },
      { path: 'previews',                component: PreviewsComponent },
      { path: 'upper-buttons',           component: UpperButtonsComponent },
      { path: 'keyboard-config',         component: KeyboardConfigComponent },
      { path: 'defaultValues',           component: InputDefaultValuesComponent},
      { path: 'default-values',          component: InputDefaultValuesComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
