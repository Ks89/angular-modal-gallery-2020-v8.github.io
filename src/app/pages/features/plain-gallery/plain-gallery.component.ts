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

import { TitleService } from '../../../core/services/title.service';
import { Metadata, UiService } from '../../../core/services/ui.service';
import { Image, ModalGalleryRef, ModalGalleryService } from '@ks89/angular-modal-gallery';
import { IMAGES_ARRAY } from '../../../shared/images';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';

@Component({
  selector: 'app-plain-gallery-page',
  templateUrl: 'plain-gallery.html',
  styleUrls: ['plain-gallery.scss']
})
export class PlainGalleryComponent implements OnInit {
  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  constructor(private uiService: UiService,
              private modalGalleryService: ModalGalleryService,
              private titleService: TitleService) {
    this.titleService.titleEvent.emit('Features - Plain Gallery');

    this.codeHtml =
      `  <ks-plain-gallery [id]="600" [images]="images" [showGallery]="true"
                    (showImage)="onShow(600, $event)"></ks-plain-gallery>`;

    this.codeTypescript =
      `  constructor(private modalGalleryService: ModalGalleryService){}

  images: Image[] = [
     new Image(0, {
        img: '../assets/img1.jpg'
      })
  ];

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
      title: 'Plain gallery'
    } as Metadata);
  }
}
