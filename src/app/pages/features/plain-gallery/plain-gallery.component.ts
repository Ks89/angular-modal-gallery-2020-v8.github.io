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
import { Image } from '@ks89/angular-modal-gallery';
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
              private titleService: TitleService) {
    this.titleService.titleEvent.emit('Features - Plain Gallery');

    this.codeHtml =
      `  <ks-plain-gallery [id]="100" [images]="images"></ks-plain-gallery>`;

    this.codeTypescript =
      `  images: Image[] = [
     new Image(0, {
        img: '../assets/img1.jpg'
      })
  ];`;
  }

  ngOnInit() {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Plain gallery'
    } as Metadata);
  }
}
