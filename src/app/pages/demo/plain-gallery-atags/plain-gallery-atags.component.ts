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

import { Component, OnInit } from '@angular/core';

import {
  Image, LibConfig,
  LineLayout,
  ModalGalleryRef,
  ModalGalleryService,
  PlainGalleryConfig,
  PlainGalleryStrategy
} from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../../../shared/images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';

@Component({
  selector: 'app-plain-gallery-atags-page',
  templateUrl: 'plain-gallery-atags.html'
})
export class PlainGalleryAtagsComponent implements OnInit {
  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  libConfigPlainGalleryRowATags: LibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout({width: '50px', height: '50px'}, {length: 4, wrap: true}, 'flex-start'),
      advanced: {aTags: true, additionalBackground: '50% 50%/cover'}
    } as PlainGalleryConfig
  };

  constructor(private uiService: UiService,
              private modalGalleryService: ModalGalleryService,
              private titleService: TitleService) {

    this.titleService.titleEvent.emit(`Examples - Plain gallery with <a> tags`);

    this.codeHtml =
      `<ks-plain-gallery [id]="204" [images]="images" [showGallery]="true"
                    [config]="libConfigPlainGalleryRowATags"
                    (showImage)="onShow(204, $event)"></ks-plain-gallery>`;

    this.codeTypescript = `
  constructor(private modalGalleryService: ModalGalleryService) {}

  libConfigPlainGalleryRowATags: LibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout({width: '50px', height: '50px'}, {length: 4, wrap: true}, 'flex-start'),
      advanced: {aTags: true, additionalBackground: '50% 50%/cover'}
    } as PlainGalleryConfig
  };

  onShow(id: number, index: number, images: Image[] = this.images): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index]
    }) as ModalGalleryRef;
  }`;
  }

  ngOnInit(): void {
    this.metaData();
  }

  onShow(id: number, index: number, images: Image[] = this.images): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index]
    }) as ModalGalleryRef;
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Demo plain atags'
    } as Metadata);
  }
}
