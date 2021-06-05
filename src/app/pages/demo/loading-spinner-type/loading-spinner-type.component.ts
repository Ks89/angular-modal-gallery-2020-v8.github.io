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
  CurrentImageConfig,
  Image,
  LibConfig, LoadingType,
  ModalGalleryConfig,
  ModalGalleryRef,
  ModalGalleryService
} from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../../../shared/images';
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
              private modalGalleryService: ModalGalleryService) {
    this.titleService.titleEvent.emit('Examples - Loading spinner types');

    this.codeHtml =
      `
  <p>1. Type STANDARD</p>
  <button (click)="openModal(322, 0, 1)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>2. Type CIRCULAR</p>
  <button (click)="openModal(323, 0, 2)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>3. Type BARS</p>
  <button (click)="openModal(324, 0, 3)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>4. Type DOTS</p>
  <button (click)="openModal(325, 0, 4)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>5. Type CUBE_FLIPPING</p>
  <button (click)="openModal(326, 0, 5)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>6. Type CIRCLES</p>
  <button (click)="openModal(327, 0, 6)">Open modal gallery id=1 at index=0</button>
  <br>
  <p>7. Type EXPLODING_SQUARES</p>
  <button (click)="openModal(328, 0, 7)">Open modal gallery id=1 at index=0</button>
  <br>
  `;

    this.codeTypescript = `
  images: Image[]; // init this value with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number, loadingType: LoadingType): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        currentImageConfig: {
          loadingConfig: {
            enable: true,
            type: loadingType
          }
        }
      } as LibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`;
  }

  ngOnInit(): void {
    this.metaData();
  }

  openModal(id: number, imageIndex: number, loadingType: LoadingType): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        currentImageConfig: {
          loadingConfig: {
            enable: true,
            type: loadingType
          }
        } as CurrentImageConfig
      } as LibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Demo spinner type'
    } as Metadata);
  }
}
