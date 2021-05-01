/*
 * MIT License
 *
 * Copyright (c) 2017-2020 Stefano Cappa
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

import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Image } from '@ks89/angular-modal-gallery';

import { TitleService } from '../../../core/services/title.service';
import { Metadata, UiService } from '../../../core/services/ui.service';
import { IMAGES_ARRAY } from '../../../shared/images';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';

@Component({
  selector: 'app-modal-gallery-page',
  templateUrl: 'modal-gallery.html',
  styleUrls: ['modal-gallery.scss']
})
export class ModalGalleryComponent implements OnInit {
  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  constructor(private uiService: UiService,
              private titleService: TitleService,
              @Inject(DOCUMENT) private document: any) {
    this.titleService.titleEvent.emit('Features - Modal Gallery');

    this.codeHtml = `<button (click)="openModal(400, images, 0)">Open modal gallery at index=0</button>`;

    this.codeTypescript =
      `  openModal(id: number, imagesArray: Image[], imageIndex: number, libConfig?: LibConfig) {
    const imageToShow: Image = imagesArray[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: imagesArray,
      currentImage: imageToShow,
      libConfig
    } as ModalGalleryConfig);
  }`;
  }

  ngOnInit() {
    this.metaData();
  }

  // openModal(id: number, imagesArray: Image[], imageIndex: number, libConfig?: LibConfig) {
  //   const imageToShow: Image = imagesArray[imageIndex];
  //   const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
  //     config: {
  //       id,
  //       images: imagesArray,
  //       currentImage: imageToShow,
  //       libConfig
  //     }
  //   } as ModalGalleryConfig);
  // }

  metaData() {
    this.uiService.setMetaData({
      title: 'Modal gallery'
    } as Metadata);
  }
}
