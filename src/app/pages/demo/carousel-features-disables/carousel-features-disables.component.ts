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
  selector: 'app-carousel-features-disables-page',
  templateUrl: 'carousel-features-disables.html'
})
export class CarouselFeaturesDisablesComponent implements OnInit {
  images: Image[] = [...IMAGES_RECT_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  autoPlay = true;
  showArrows = true;
  showDots = true;

  constructor(private uiService: UiService,
              private titleService: TitleService) {
    this.titleService.titleEvent.emit('Examples - Carousel disable features');

    this.codeHtml =
      `  <p>Autoplay:
      <button class="btn btn-primary" (click)="onChangeAutoPlay()">
      {{autoPlay ? 'disable autoplay' : 'enable autoplay'}}
      </button>
    </p>
    <p>Show Arrows:
      <button class="btn btn-primary" (click)="onChangeShowArrows()">
      {{showArrows ? 'Hide Arrows' : 'Show Arrows'}}
      </button>
    </p>
    <p>Show Dots:
      <button class="btn btn-primary" (click)="onChangeShowDots()">
      {{showDots ? 'Hide Dots' : 'Show Dots'}}
      </button>
    </p>
    <br>
    <ks-carousel [id]="108" [images]="imagesRect"
  [playConfig]="{autoPlay: autoPlay, interval: 3000, pauseOnHover: true}"
  [carouselConfig]="{maxWidth: '100%', maxHeight: '400px', showArrows: showArrows,
                     objectFit: 'cover', keyboardEnable: true, modalGalleryEnable: false, legacyIE11Mode: false}"
  [dotsConfig]="{visible: showDots}"></ks-carousel>`;

    this.codeTypescript =
      `  images: Image[]; // init this value with your images`;
  }

  onChangeAutoPlay() {
    this.autoPlay = !this.autoPlay;
  }

  onChangeShowArrows() {
    this.showArrows = !this.showArrows;
  }

  onChangeShowDots() {
    this.showDots = !this.showDots;
  }

  ngOnInit(): void {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Carousel disable features'
    } as Metadata);
  }
}
