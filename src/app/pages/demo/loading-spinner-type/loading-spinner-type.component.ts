/*
 * MIT License
 *
 * Copyright (c) 2017-2018 Stefano Cappa
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

// import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll';

import { Image } from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';


@Component({
  selector: 'app-loading-spinner-type-page',
  templateUrl: 'loading-spinner-type.html'
})
export class LoadingSpinnerTypeComponent implements OnInit {
  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  constructor(private uiService: UiService,
              private titleService: TitleService,
              // private scrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any) {
    this.titleService.titleEvent.emit('Examples - Loading spinner types');

    // scroll to the top of the document
    // const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, 'div#demo');
    // this.scrollService.start(pageScrollInstance);

    this.codeHtml =
      `<p>1. Type STANDARD</p>
  <ks-modal-gallery [id]="0" [modalImages]="images"
                    [currentImageConfig]="{loadingConfig: {enable: true, type: 1}}"></ks-modal-gallery>
  <br>
  <p>2. Type CIRCULAR</p>
  <ks-modal-gallery [id]="1" [modalImages]="images"
                    [currentImageConfig]="{loadingConfig: {enable: true, type: 2}}"></ks-modal-gallery>
  <br>
  <p>3. Type BARS</p>
  <ks-modal-gallery [id]="2" [modalImages]="images"
                    [currentImageConfig]="{loadingConfig: {enable: true, type: 3}}"></ks-modal-gallery>
  <br>
  <p>4. Type DOTS</p>
  <ks-modal-gallery [id]="3" [modalImages]="images"
                    [currentImageConfig]="{loadingConfig: {enable: true, type: 4}}"></ks-modal-gallery>
  <br>
  <p>5. Type CUBE_FLIPPING</p>
  <ks-modal-gallery [id]="4" [modalImages]="images"
                    [currentImageConfig]="{loadingConfig: {enable: true, type: 5}}"></ks-modal-gallery>
  <br>
  <p>6. Type CIRCLES</p>
  <ks-modal-gallery [id]="5" [modalImages]="images"
                    [currentImageConfig]="{loadingConfig: {enable: true, type: 6}}"></ks-modal-gallery>
  <br>
  <p>7. Type EXPLOSING_SQUARES</p>
  <ks-modal-gallery [id]="6" [modalImages]="images"
                    [currentImageConfig]="{loadingConfig: {enable: true, type: 7}}"></ks-modal-gallery>
  <br>
  `;
  }

  ngOnInit() {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData(<Metadata>{
      title: 'Demo spinner type'
    });
  }
}
