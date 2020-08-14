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

import { Action, ButtonEvent, ButtonsConfig, ButtonsStrategy, ButtonType, Image, ImageModalEvent } from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';

@Component({
  selector: 'app-buttons-strategies-page',
  templateUrl: 'buttons-strategies.html'
})
export class ButtonsStrategiesComponent implements OnInit {
  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  };
  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };
  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };
  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };

  constructor(private uiService: UiService,
              private titleService: TitleService,
              // private scrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any) {

    // scroll to the top of the document
    // const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, 'div#demo');
    // this.scrollService.start(pageScrollInstance);

    this.titleService.titleEvent.emit('Examples - Button strategies');

    this.codeHtml =
      `  <p>1. Strategy DEFAULT</p>
  <ks-modal-gallery [id]="0" [modalImages]="images"
                    [buttonsConfig]="buttonsConfigDefault"></ks-modal-gallery>
  <br>
  <p>2. Strategy SIMPLE</p>
  <ks-modal-gallery [id]="1" [modalImages]="images"
                    [buttonsConfig]="buttonsConfigSimple"></ks-modal-gallery>
  <br>
  <p>3. Strategy ADVANCED</p>
  <ks-modal-gallery [id]="2" [modalImages]="images"
                    [buttonsConfig]="buttonsConfigAdvanced"></ks-modal-gallery>
  <br>
  <p>4. Strategy FULL</p>
  <ks-modal-gallery [id]="3" [modalImages]="images"
                    [buttonsConfig]="buttonsConfigFull"
                    (show)="onVisibleIndex($event)"
                    (buttonBeforeHook)="onButtonBeforeHook($event)"
                    (buttonAfterHook)="onButtonAfterHook($event)"></ks-modal-gallery>`;

    this.codeTypescript =
      `  images: Image[]; // init this value with your images

  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  };
  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };
  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };
  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };
  onButtonBeforeHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }
    // Invoked after a click on a button, but before that the related
    // action is applied.
    // For instance: this method will be invoked after a click
    // of 'close' button, but before that the modal gallery
    // will be really closed.
    if (event.button.type === ButtonType.DELETE) {
      // remove the current image and reassign all other to the array of images
      // You must think in a functional way! So, re-assign the array instead of modifying it.
      this.images = this.images.filter((val: Image) => event.image && val.id !== event.image.id);
    }
  }

  onButtonAfterHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }
    // Invoked after both a click on a button and its related action.
    // For instance: this method will be invoked after a click
    // of 'close' button, but before that the modal gallery
    // will be really closed.
  }

  onVisibleIndex(event: ImageModalEvent) {
    console.log('onVisibleIndex action: ' + Action[event.action]);
    console.log('onVisibleIndex result:' + event.result);
  }`;
  }

  onButtonBeforeHook(event: ButtonEvent) {
    console.log('onButtonBeforeHook ', event);

    if (!event || !event.button) {
      return;
    }

    // Invoked after a click on a button, but before that the related
    // action is applied.
    // For instance: this method will be invoked after a click
    // of 'close' button, but before that the modal gallery
    // will be really closed.

    if (event.button.type === ButtonType.DELETE) {
      // remove the current image and reassign all other to the array of images

      console.log('delete in app with images count ' + this.images.length);

      // You must think in a functional way! So, re-assign the array instead of modifying it.
      this.images = this.images.filter((val: Image) => event.image && val.id !== event.image.id);
    }
  }

  onButtonAfterHook(event: ButtonEvent) {
    console.log('onButtonAfterHook ', event);

    if (!event || !event.button) {
      return;
    }

    // Invoked after both a click on a button and its related action.
    // For instance: this method will be invoked after a click
    // of 'close' button, but before that the modal gallery
    // will be really closed.
  }

  onVisibleIndex(event: ImageModalEvent) {
    console.log('onVisibleIndex action: ' + Action[event.action]);
    console.log('onVisibleIndex result:' + event.result);
  }

  ngOnInit() {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData(<Metadata>{
      title: 'Demo buttons strategies'
    });
  }
}
