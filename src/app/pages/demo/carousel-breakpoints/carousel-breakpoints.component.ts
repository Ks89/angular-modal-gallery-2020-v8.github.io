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

import { IMAGES_RECT_ARRAY } from '../../../shared/images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';
import { Image } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-carousel-breakpoints',
  templateUrl: 'carousel-breakpoints.html'
})
export class CarouselBreakpointsComponent implements OnInit {
  images: Image[] = [...IMAGES_RECT_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;
  codeHtml2: string;
  codeTypescript2: string;

  constructor(private uiService: UiService,
              private titleService: TitleService) {

    this.titleService.titleEvent.emit('Examples - Carousel custom breakpoints');

    this.codeHtml =
      `  <ks-carousel [id]="115" [images]="images"
    [previewConfig]="{visible: true, breakpoints: {xSmall: 50, small: 60, medium: 80, large: 150, xLarge: 180}}"></ks-carousel>`;

    this.codeTypescript =
      `  images: Image[]; // init this value with your images`;

    this.codeHtml2 =
      `  <ks-carousel [id]="116" [images]="images"
    [carouselConfig]="{maxWidth: '500px', maxHeight: '400px', showArrows: true, objectFit: 'cover', keyboardEnable: true, modalGalleryEnable: false, legacyIE11Mode: false}"
    [previewConfig]="{visible: true, breakpoints: {xSmall: 50, small: 60, medium: 70, large: 80, xLarge: 100}}"></ks-carousel>`;

    this.codeTypescript2 =
      `  images: Image[]; // init this value with your images`;
  }

  ngOnInit(): void {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Carousel custom breakpoints'
    } as Metadata);
  }
}
