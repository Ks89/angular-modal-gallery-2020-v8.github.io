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
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Component, OnInit } from '@angular/core';

import {
  CurrentImageConfig, Image,
  LibConfig,
  ModalGalleryConfig,
  ModalGalleryRef,
  ModalGalleryService
} from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../../../shared/images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';
import { SidePreviewsConfig } from '@ks89/angular-modal-gallery/lib/model/slide-config.interface';

@Component({
  selector: 'app-infinite-sliding-page',
  templateUrl: 'infinite-sliding.html'
})
export class InfiniteSlidingComponent implements OnInit {

  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  constructor(private uiService: UiService,
              private titleService: TitleService,
              private modalGalleryService: ModalGalleryService) {

    this.titleService.titleEvent.emit('Examples - Infinite sliding');

    this.codeHtml =
      `<button (click)="openModal(318, 0)">Open modal gallery id=1 at index=0</button>`;

    this.codeTypescript = `
  images: Image[]; // init this value with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        slideConfig: {
          infinite: true,
          sidePreviews: {
            show: false
          }
        }
      } as LibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`;
  }

  ngOnInit(): void {
    this.metaData();
  }

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        slideConfig: {
          infinite: true,
          sidePreviews: {
            show: false
          } as SidePreviewsConfig
        } as CurrentImageConfig
      } as LibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Demo infinite sliding'
    } as Metadata);
  }
}
