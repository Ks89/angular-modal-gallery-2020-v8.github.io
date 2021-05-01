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
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

import { Metadata, UiService } from '../../core/services/ui.service';

@Component({
  selector: 'app-getting-started-page',
  templateUrl: 'getting-started.html',
  styleUrls: ['getting-started.scss']
})
export class GettingStartedComponent implements OnInit {

  constructor(private uiService: UiService,
              private router: Router,
              private viewPortScroller: ViewportScroller,
              @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
    this.metaData();
  }

  onScrollTo(tag: string) {
    this.viewPortScroller.scrollToAnchor(tag);
  }

  onNavigateTo(path: string) {
    this.router.navigate([path]);
  }

  metaData() {
    this.uiService.setMetaData(<Metadata>{
      title: 'Getting started'
    });
  }
}
