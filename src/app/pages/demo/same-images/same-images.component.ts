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

import { SAME_IMAGES } from '../images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';

@Component({
  selector: 'app-same-images-page',
  templateUrl: 'same-images.html'
})
export class SameImagesComponent implements OnInit {
  images: Image[] = [...SAME_IMAGES];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  constructor(private uiService: UiService,
              private titleService: TitleService,
              @Inject(DOCUMENT) private document: any) {

    this.titleService.titleEvent.emit('Examples - Same images');

    this.codeHtml =
      `<ks-modal-gallery [id]="0" [modalImages]="images"></ks-modal-gallery>`;

    this.codeTypescript =
      `  images: Image[] = [
  new Image(0, {
    img: '/assets/images/gallery/img1.jpg?0',
    extUrl: 'http://www.google.com'
  }),
  new Image(1, {
    img: '/assets/images/gallery/img1.jpg?1',
    extUrl: 'http://www.google.com'
  }),
  new Image(2, {
    img: '/assets/images/gallery/img1.jpg?2',
    extUrl: 'http://www.google.com'
  }),`;
  }

  ngOnInit() {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData(<Metadata>{
      title: 'Demo same images'
    });
  }
}
