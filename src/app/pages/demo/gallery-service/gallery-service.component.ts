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

// import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll';

import { Action, GalleryService, Image, ImageModalEvent } from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';

@Component({
  selector: 'app-gallery-service-page',
  templateUrl: 'gallery-service.html'
})
export class GalleryServiceComponent implements OnInit {
  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;
  codeHtml2: string;
  codeTypescript2: string;

  constructor(private uiService: UiService,
              private titleService: TitleService,
              private galleryService: GalleryService,
              // private scrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any) {

    // scroll to the top of the document
    // const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, 'div#demo');
    // this.scrollService.start(pageScrollInstance);

    this.titleService.titleEvent.emit('Examples - Gallery service');

    this.codeHtml =
      `<button class="btn btn-primary" (click)="openModalViaService(1, 2)"><i class="fas fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Open galleryId=1 at index=2</button>
<ks-modal-gallery [id]="1" [modalImages]="images"></ks-modal-gallery>`;

    this.codeHtml2 =
      `<ks-modal-gallery [id]="2" [modalImages]="images" (show)="onShowAutoCloseExample($event, 2)"></ks-modal-gallery>`;

    this.codeTypescript =
      `openModalViaService(id: number | undefined, index: number) {
  console.log('opening gallery with index ' + index);
  this.galleryService.openGallery(id, index);
}`;
    this.codeTypescript2 =
      `onShowAutoCloseExample(event: ImageModalEvent, galleryId: number) {
  setTimeout(() => {
    this.galleryService.closeGallery(galleryId);
  }, 3000);
}`;
  }

  openModalViaService(id: number | undefined, index: number) {
    console.log('opening gallery with index ' + index);
    this.galleryService.openGallery(id, index);
  }

  onShowAutoCloseExample(event: ImageModalEvent, galleryId: number) {
    console.log(`onShowAutoCloseExample with id=${galleryId} action: ` + Action[event.action]);
    console.log('onShowAutoCloseExample result:' + event.result);
    console.log('Starting timeout of 3 second to close modal gallery automatically');
    setTimeout(() => {
      console.log('setTimeout end - closing gallery with id=' + galleryId);
      this.galleryService.closeGallery(galleryId);
    }, 3000);
  }

  ngOnInit() {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData(<Metadata>{
      title: 'Demo gallery service'
    });
  }
}
