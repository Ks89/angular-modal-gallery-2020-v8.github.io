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

import { Subscription } from 'rxjs';

import {
  ButtonEvent,
  ButtonsConfig,
  ButtonsStrategy, ButtonType,
  Image,
  LibConfig, ModalGalleryConfig, ModalGalleryRef,
  ModalGalleryService
} from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../../../shared/images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';

@Component({
  selector: 'app-buttons-strategies-page',
  templateUrl: 'buttons-strategies.html'
})
export class ButtonsStrategiesComponent implements OnInit, OnDestroy {
  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  };
  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };
  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };
  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };

  // subscriptions to receive events from the gallery
  // REMEMBER TO call unsubscribe(); in ngOnDestroy (see below)
  private buttonAfterHookSubscription: Subscription | undefined;

  constructor(private uiService: UiService,
              private titleService: TitleService,
              private modalGalleryService: ModalGalleryService) {
    this.titleService.titleEvent.emit('Examples - Button strategies');

    this.codeHtml =
      `
  <p>1. Strategy DEFAULT</p>
  <button (click)="openModal(308, 0, buttonsConfigDefault)">Click to open modal gallery id=1 at index=0</button>
  <br>
  <p>2. Strategy SIMPLE</p>
  <button (click)="openModal(309, 0, buttonsConfigSimple)">Click to open modal gallery id=1 at index=0</button>
  <br>
  <p>3. Strategy ADVANCED</p>
  <button (click)="openModal(310, 0, buttonsConfigAdvanced)">Click to open modal gallery id=1 at index=0</button>
  <br>
  <p>4. Strategy FULL</p>
  <button (click)="openModal(311, 0, buttonsConfigFull)">Click to open modal gallery id=1 at index=0</button>`;

    this.codeTypescript =
      `  images: Image[]; // init this value with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  };
  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };
  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };
  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
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
        },
      } as LibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;

    // required to enable DELETE button
    this.buttonAfterHookSubscription = dialogRef.buttonAfterHook$.subscribe((event: ButtonEvent) => {
      console.log('OUTPUT - buttonAfterHook$:', event);
      if (!event || !event.button) {
        return;
      }
      if (event.button.type === ButtonType.DELETE) {
        // remove the current image and reassign all other to the array of images
        this.images = this.images.filter((val: Image) => event.image && val.id !== event.image.id);
        this.modalGalleryService.updateModalImages(this.images);
      }
      // Invoked after both a click on a button and its related action.
      // For instance: this method will be invoked after a click
      // of 'close' button, but before that the modal gallery
      // will be really closed.
    });
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.buttonAfterHookSubscription) {
      this.buttonAfterHookSubscription.unsubscribe();
    }
  }`;
  }

  ngOnInit(): void {
    this.metaData();
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

    // required to enable DELETE button
    this.buttonAfterHookSubscription = dialogRef.buttonAfterHook$.subscribe((event: ButtonEvent) => {
      console.log('OUTPUT - buttonAfterHook$:', event);
      if (!event || !event.button) {
        return;
      }
      if (event.button.type === ButtonType.DELETE) {
        // remove the current image and reassign all other to the array of images
        this.images = this.images.filter((val: Image) => event.image && val.id !== event.image.id);
        this.modalGalleryService.updateModalImages(this.images);
      }
      // Invoked after both a click on a button and its related action.
      // For instance: this method will be invoked after a click
      // of 'close' button, but before that the modal gallery
      // will be really closed.
    });
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Demo buttons strategies'
    } as Metadata);
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.buttonAfterHookSubscription) {
      this.buttonAfterHookSubscription.unsubscribe();
    }
  }
}
