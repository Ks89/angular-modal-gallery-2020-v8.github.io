/*
 * MIT License
 *
 * Copyright (c) 2017-2021 Stefano Cappa
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Component, OnDestroy, OnInit } from '@angular/core';

import {
  ButtonEvent,
  ButtonsConfig,
  ButtonsStrategy,
  ButtonType,
  Image,
  LibConfig,
  ModalGalleryConfig,
  ModalGalleryRef, ModalGalleryService
} from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../../../shared/images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buttons-custom-fa-page',
  templateUrl: 'buttons-custom-fa.html'
})
export class ButtonsCustomFaComponent implements OnInit, OnDestroy {
  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  customButtonsConfig: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'fas fa-plus white',
        type: ButtonType.CUSTOM,
        ariaLabel: 'custom plus aria label',
        title: 'custom plus title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-times white',
        type: ButtonType.CLOSE,
        ariaLabel: 'custom close aria label',
        title: 'custom close title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-download white',
        type: ButtonType.DOWNLOAD,
        ariaLabel: 'custom download aria label',
        title: 'custom download title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-external-link-alt white',
        type: ButtonType.EXTURL,
        ariaLabel: 'custom exturl aria label',
        title: 'custom exturl title',
        fontSize: '20px'
      }
    ]
  };

  // subscriptions to receive events from the gallery
  // REMEMBER TO call unsubscribe(); in ngOnDestroy (see below)
  private buttonBeforeHookSubscription: Subscription | undefined;

  constructor(private uiService: UiService,
              private titleService: TitleService,
              private modalGalleryService: ModalGalleryService) {
    this.titleService.titleEvent.emit('Examples - Custom buttons with Font Awesome 5');

    this.codeHtml =
      `  <button (click)="openModal(306, 0, customButtonsConfig)">Click to open modal gallery id=1 at index=0</button>`;

    this.codeTypescript =
      `  images: Image[]; // init this value with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  customButtonsConfig: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'fa fa-plus white',
        type: ButtonType.CUSTOM,
        ariaLabel: 'custom plus aria label',
        title: 'custom plus title',
        fontSize: '20px'
      },
      {
        className: 'fa fa-close white',
        type: ButtonType.CLOSE,
        ariaLabel: 'custom close aria label',
        title: 'custom close title',
        fontSize: '20px'
      },
      {
        className: 'fa fa-download white',
        type: ButtonType.DOWNLOAD,
        ariaLabel: 'custom download aria label',
        title: 'custom download title',
        fontSize: '20px'
      },
      {
        className: 'fa fa-external-link white',
        type: ButtonType.EXTURL,
        ariaLabel: 'custom exturl aria label',
        title: 'custom exturl title',
        fontSize: '20px'
      }
    ]
  };

  openModal(id: number, imageIndex: number, buttonsConfig: ButtonsConfig): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        buttonsConfig: buttonsConfig,
        // 'downloadable: true' is required to enable download button (if visible)
        currentImageConfig: {
          downloadable: true
        }
      } as LibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;

    // required to enable ADD button
    this.buttonBeforeHookSubscription = dialogRef.buttonBeforeHook$.subscribe((event: ButtonEvent) => {
      if (!event || !event.button) {
        return;
      }
      // Invoked after a click on a button, but before that the related
      // action is applied.

      if (event.button.type === ButtonType.CUSTOM) {
        console.log('adding a new random image at the end');

        // add to images array
        const imageToCopy: Image = this.images[Math.floor(Math.random() * this.images.length)];
        const newImage: Image = new Image(this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
        this.images = [...this.images, newImage];

        setTimeout(() => {
          this.modalGalleryService.updateModalImages(this.images);
        }, 0);
      }
    });
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.buttonBeforeHookSubscription) {
      this.buttonBeforeHookSubscription.unsubscribe();
    }
  }
  `;
  }

  openModal(id: number, imageIndex: number, buttonsConfig: ButtonsConfig): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        buttonsConfig,
        // 'downloadable: true' is required to enable download button (if visible)
        currentImageConfig: {
          downloadable: true
        }
      } as LibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;

    // required to enable ADD button
    this.buttonBeforeHookSubscription = dialogRef.buttonBeforeHook$.subscribe((event: ButtonEvent) => {
      if (!event || !event.button) {
        return;
      }
      // Invoked after a click on a button, but before that the related
      // action is applied.

      if (event.button.type === ButtonType.CUSTOM) {
        console.log('adding a new random image at the end');

        // add to images array
        const imageToCopy: Image = this.images[Math.floor(Math.random() * this.images.length)];
        const newImage: Image = new Image(this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
        this.images = [...this.images, newImage];

        setTimeout(() => {
          this.modalGalleryService.updateModalImages(this.images);
        }, 0);
      }
    });
  }

  ngOnInit(): void {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Demo buttons custom fa'
    } as Metadata);
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.buttonBeforeHookSubscription) {
      this.buttonBeforeHookSubscription.unsubscribe();
    }
  }
}
