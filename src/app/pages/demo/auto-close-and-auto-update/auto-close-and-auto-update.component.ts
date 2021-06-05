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
  Action,
  Image,
  ImageModalEvent,
  ModalGalleryConfig,
  ModalGalleryRef,
  ModalGalleryService
} from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../../../shared/images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auto-close-and-auto-update-page',
  templateUrl: 'auto-close-and-auto-update.html'
})
export class AutoCloseAndAutoUpdateComponent implements OnInit, OnDestroy {
  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;
  codeHtml2: string;
  codeTypescript2: string;

  // this variable is used only for example of auto navigation
  // tslint:disable-next-line:no-any
  private timeout: any;

  private count = 0;

  // subscriptions to receive events from the gallery
  // REMEMBER TO call unsubscribe(); in ngOnDestroy (see below)
  private showSubscription: Subscription | undefined;

  constructor(private uiService: UiService,
              private titleService: TitleService,
              private modalGalleryService: ModalGalleryService) {

    this.titleService.titleEvent.emit('Examples - Gallery service');

    this.codeHtml =
      `  <button (click)="openModalWithAutoClose(303, images, 2)">Click to open modal gallery id=1 at index=2 (third image)</button>`;

    this.codeHtml2 =
      `  <button (click)="openModalWithAutoUpdate(304, images, 2)">Click to open modal gallery id=1 at index=2 (third image)</button>`;

    this.codeTypescript =
      `  private timeout: any;

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModalWithAutoClose(id: number, imagesArrayToUse: Image[], imageIndex: number): void {
    const imageToShow: Image = imagesArrayToUse[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: imagesArrayToUse,
      currentImage: imageToShow
    } as ModalGalleryConfig) as ModalGalleryRef;

    this.showSubscription = dialogRef.show$.subscribe((event: ImageModalEvent) => {
      const galleryId: number = event.galleryId;
      // clear previous timeout
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        console.log('setTimeout end - closing gallery with id=' + galleryId);
        this.modalGalleryService.close(galleryId, false);
      }, 3000);
    });
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.showSubscription) {
      this.showSubscription.unsubscribe();
    }
  }`;
    this.codeTypescript2 =
      `  private count = 0;

  openModalWithAutoUpdate(id: number, imagesArrayToUse: Image[], imageIndex: number): void {
    const imageToShow: Image = imagesArrayToUse[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: imagesArrayToUse,
      currentImage: imageToShow
    } as ModalGalleryConfig) as ModalGalleryRef;
    this.showSubscription = dialogRef.show$.subscribe((event: ImageModalEvent) => {
      if (this.count !== 0) {
        return;
      }
      const indexToRefresh = 1;
      const image: Image = new Image(1, {
        img: '../assets/images/gallery/img5.jpg',
        description: 'Description 2 updated with imag5.jpg'
      });

      // create the new array of images with the updated image inside
      const newImages: Image[] = [...this.images];
      newImages[indexToRefresh] = image;

      setTimeout(() => {
        this.modalGalleryService.updateModalImages(newImages);
        console.log('image updated successfully!');
      }, 4000);
    });
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.showSubscription) {
      this.showSubscription.unsubscribe();
    }
  }`;
  }

  openModalWithAutoClose(id: number, imagesArrayToUse: Image[], imageIndex: number): void {
    const imageToShow: Image = imagesArrayToUse[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: imagesArrayToUse,
      currentImage: imageToShow
    } as ModalGalleryConfig) as ModalGalleryRef;

    this.showSubscription = dialogRef.show$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - show$: ', event);
      const galleryId: number = event.galleryId;
      console.log(`onShowAutoCloseExample with id=${galleryId} action: ` + Action[event.action]);
      console.log('onShowAutoCloseExample result:' + event.result);
      console.log('Starting timeout of 3 seconds to close modal gallery automatically');
      // clear previous timeout
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        console.log('setTimeout end - closing gallery with id=' + galleryId);
        this.modalGalleryService.close(galleryId, false);
      }, 3000);
    });
  }

  openModalWithAutoUpdate(id: number, imagesArrayToUse: Image[], imageIndex: number): void {
    const imageToShow: Image = imagesArrayToUse[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: imagesArrayToUse,
      currentImage: imageToShow
    } as ModalGalleryConfig) as ModalGalleryRef;
    this.showSubscription = dialogRef.show$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - show$: ', event);
      if (this.count !== 0) {
        return;
      }
      const indexToRefresh = 1;
      const image: Image = new Image(1, {
        img: '../assets/images/gallery/img5.jpg',
        description: 'Description 2 updated with imag5.jpg'
      });

      console.log('updating image at index ' + indexToRefresh + ', after 4 seconds');

      // create the new array of images with the updated image inside
      const newImages: Image[] = [...this.images];
      newImages[indexToRefresh] = image;

      setTimeout(() => {
        this.modalGalleryService.updateModalImages(newImages);
        console.log('image updated successfully!');
      }, 4000);
    });
  }

  ngOnInit(): void {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Demo gallery service'
    } as Metadata);
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.showSubscription) {
      this.showSubscription.unsubscribe();
    }
  }
}
