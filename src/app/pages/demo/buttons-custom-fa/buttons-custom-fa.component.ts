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

import { ButtonEvent, ButtonsConfig, ButtonsStrategy, ButtonType, Image } from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';

@Component({
  selector: 'app-buttons-custom-fa-page',
  templateUrl: 'buttons-custom-fa.html'
})
export class ButtonsCustomFaComponent implements OnInit {
  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  customButtonsConfig: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'fas fa-plus white',
        type: ButtonType.CUSTOM,
        ariaLabel: 'custom plus aria label',
        title: 'custom plus title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-times white',
        type: ButtonType.CLOSE,
        ariaLabel: 'custom close aria label',
        title: 'custom close title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-download white',
        type: ButtonType.DOWNLOAD,
        ariaLabel: 'custom download aria label',
        title: 'custom download title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-external-link-alt white',
        type: ButtonType.EXTURL,
        ariaLabel: 'custom exturl aria label',
        title: 'custom exturl title',
        fontSize: '20px'
      }
    ]
  };

  constructor(private uiService: UiService,
              private titleService: TitleService,
              @Inject(DOCUMENT) private document: any) {
    this.titleService.titleEvent.emit('Examples - Custom buttons with Font Awesome 5');

    this.codeHtml =
      `  <ks-modal-gallery [id]="0" [modalImages]="images"
    [currentImageConfig]="{downloadable: true}"
    [buttonsConfig]="customButtonsConfig"
    (buttonBeforeHook)="onCustomButtonBeforeHook($event)"
    (buttonAfterHook)="onCustomButtonAfterHook($event)"></ks-modal-gallery>`;

    this.codeTypescript =
      `  images: Image[]; // init this value with your images

  customButtonsConfig: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'fa fa-plus white',
        type: ButtonType.CUSTOM,
        ariaLabel: 'custom plus aria label',
        title: 'custom plus title',
        fontSize: '20px'
      },
      {
        className: 'fa fa-close white',
        type: ButtonType.CLOSE,
        ariaLabel: 'custom close aria label',
        title: 'custom close title',
        fontSize: '20px'
      },
      {
        className: 'fa fa-download white',
        type: ButtonType.DOWNLOAD,
        ariaLabel: 'custom download aria label',
        title: 'custom download title',
        fontSize: '20px'
      },
      {
        className: 'fa fa-external-link white',
        type: ButtonType.EXTURL,
        ariaLabel: 'custom exturl aria label',
        title: 'custom exturl title',
        fontSize: '20px'
      }
    ]
  };

  onCustomButtonBeforeHook(event: ButtonEvent) {
    // use before hook to get click on buttons
    // for custom buttons, you have to check event with your logic
    console.log('onCustomButtonBeforeHook ', event);
    if (!event || !event.button) {
      return;
    }
    // Invoked after a click on a button, but before that the related
    // action is applied.
  }

  onCustomButtonAfterHook(event: ButtonEvent) {
    // use after hook to get click on buttons
    // for custom buttons, you have to check event with your logic
    console.log('onCustomButtonAfterHook ', event);
    if (!event || !event.button) {
      return;
    }
    // Invoked after both a click on a button and its related action.
  }`;
  }

  onCustomButtonBeforeHook(event: ButtonEvent) {
    // use before hook to get click on buttons
    // for custom buttons, you have to check event with your logic
    console.log('onCustomButtonBeforeHook ', event);
    if (!event || !event.button) {
      return;
    }
    // Invoked after a click on a button, but before that the related
    // action is applied.
  }

  onCustomButtonAfterHook(event: ButtonEvent) {
    // use after hook to get click on buttons
    // for custom buttons, you have to check event with your logic
    console.log('onCustomButtonAfterHook ', event);
    if (!event || !event.button) {
      return;
    }
    // Invoked after both a click on a button and its related action.
  }

  ngOnInit() {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData(<Metadata>{
      title: 'Demo buttons custom fa'
    });
  }
}
