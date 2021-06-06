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
  ButtonEvent, ButtonType,
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

@Component({
  selector: 'app-output-events-page',
  templateUrl: 'output-events.html',
  styleUrls: ['output-events.scss']
})
export class OutputEventsComponent implements OnInit, OnDestroy {
  images: Image[] = [...IMAGES_ARRAY];

  imageLoaded: ImageModalEvent | undefined;
  visibleIndex: ImageModalEvent | undefined;
  isFirstImage: ImageModalEvent | undefined;
  isLastImage: ImageModalEvent | undefined;
  closeImageModal: ImageModalEvent | undefined;
  buttonBeforeHook: ButtonEvent | undefined;
  buttonAfterHook: ButtonEvent | undefined;

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  // subscriptions to receive events from the gallery
  // REMEMBER TO call unsubscribe(); in ngOnDestroy (see below)
  private closeSubscription: Subscription | undefined;
  private showSubscription: Subscription | undefined;
  private firstImageSubscription: Subscription | undefined;
  private lastImageSubscription: Subscription | undefined;
  private hasDataSubscription: Subscription | undefined;
  private buttonBeforeHookSubscription: Subscription | undefined;
  private buttonAfterHookSubscription: Subscription | undefined;

  constructor(private uiService: UiService,
              private titleService: TitleService,
              private modalGalleryService: ModalGalleryService) {

    this.titleService.titleEvent.emit('Examples - Output events');

    this.codeHtml =
      `<button class="btn-modal" (click)="openModal(333, 0)">Click to open modal gallery id=1 at index=0</button>`;

    this.codeTypescript = `
  images: Image[]; // init this value with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
    } as ModalGalleryConfig) as ModalGalleryRef;
    this.closeSubscription = dialogRef.close$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - close$: ', event);
    });
    this.showSubscription = dialogRef.show$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - show$: ', event);
    });
    this.firstImageSubscription = dialogRef.firstImage$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - firstImage$: ', event);
    });
    this.lastImageSubscription = dialogRef.lastImage$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - lastImage$: ', event);
    });
    this.hasDataSubscription = dialogRef.hasData$.subscribe((event: ImageModalEvent) => {
      // angular-modal-gallery will emit this event if it will load successfully input images
      console.log('OUTPUT - hasData$: ', event);
    });
    this.buttonBeforeHookSubscription = dialogRef.buttonBeforeHook$.subscribe((event: ButtonEvent) => {
      console.log('OUTPUT - buttonBeforeHook$: ', event);
      if (!event || !event.button) {
        return;
      }
      // Invoked after a click on a button, but before that the related
      // action is applied.
      // For instance: this method will be invoked after a click
      // of 'close' button, but before that the modal gallery
      // will be really closed.
      if (event.button.type === ButtonType.DELETE) {
        // remove the current image and reassign all other to the array of images
        console.log('delete in app with images count ' + this.images.length);
        this.images = this.images.filter((val: Image) => event.image && val.id !== event.image.id);
      }
    });
    this.buttonAfterHookSubscription = dialogRef.buttonAfterHook$.subscribe((event: ButtonEvent) => {
      if (!event || !event.button) {
        return;
      }
      // Invoked after both a click on a button and its related action.
      // For instance: this method will be invoked after a click
      // of 'close' button, but before that the modal gallery
      // will be really closed.
    });
  }`;
  }

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex]
    } as ModalGalleryConfig) as ModalGalleryRef;
    this.closeSubscription = dialogRef.close$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - close$: ', event);
      this.closeImageModal = event;
    });
    this.showSubscription = dialogRef.show$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - show$: ', event);
      this.visibleIndex = event;
    });
    this.firstImageSubscription = dialogRef.firstImage$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - firstImage$: ', event);
      this.isFirstImage = event;
    });
    this.lastImageSubscription = dialogRef.lastImage$.subscribe((event: ImageModalEvent) => {
      console.log('OUTPUT - lastImage$: ', event);
      this.isLastImage = event;
    });
    this.hasDataSubscription = dialogRef.hasData$.subscribe((event: ImageModalEvent) => {
      // angular-modal-gallery will emit this event if it will load successfully input images
      console.log('OUTPUT - hasData$: ', event);
      this.imageLoaded = event;
    });
    this.buttonBeforeHookSubscription = dialogRef.buttonBeforeHook$.subscribe((event: ButtonEvent) => {
      console.log('OUTPUT - buttonBeforeHook$: ', event);
      if (!event || !event.button) {
        return;
      }
      // Invoked after a click on a button, but before that the related
      // action is applied.
      // For instance: this method will be invoked after a click
      // of 'close' button, but before that the modal gallery
      // will be really closed.
      if (event.button.type === ButtonType.DELETE) {
        // remove the current image and reassign all other to the array of images
        console.log('delete in app with images count ' + this.images.length);
        this.images = this.images.filter((val: Image) => event.image && val.id !== event.image.id);
      }
      this.buttonBeforeHook = event;
    });
    this.buttonAfterHookSubscription = dialogRef.buttonAfterHook$.subscribe((event: ButtonEvent) => {
      if (!event || !event.button) {
        return;
      }
      this.buttonAfterHook = event;
      // Invoked after both a click on a button and its related action.
      // For instance: this method will be invoked after a click
      // of 'close' button, but before that the modal gallery
      // will be really closed.
    });
  }

  ngOnInit(): void {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Demo outputs'
    } as Metadata);
  }

  ngOnDestroy(): void {
    // release resources to prevent memory leaks and unexpected behaviours
    if (this.closeSubscription) {
      this.closeSubscription.unsubscribe();
    }
    if (this.showSubscription) {
      this.showSubscription.unsubscribe();
    }
    if (this.firstImageSubscription) {
      this.firstImageSubscription.unsubscribe();
    }
    if (this.lastImageSubscription) {
      this.lastImageSubscription.unsubscribe();
    }
    if (this.hasDataSubscription) {
      this.hasDataSubscription.unsubscribe();
    }
    if (this.buttonBeforeHookSubscription) {
      this.buttonBeforeHookSubscription.unsubscribe();
    }
    if (this.buttonAfterHookSubscription) {
      this.buttonAfterHookSubscription.unsubscribe();
    }
  }
}
