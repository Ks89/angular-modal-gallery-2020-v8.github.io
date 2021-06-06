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

import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

export interface Metadata {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private appColor = '#252525';
  private appImage = '/assets/favicon.png';
  private appTitle = '@ks89/amg';
  private appDescription = 'Check angular-modal-gallery and build your awesome image galleries';

  constructor(private meta: Meta, private title: Title) {
  }

  setMetaData(config: Metadata) {
    const description = config.description || this.appDescription;
    const image = config.image || this.appImage;
    const title = config.title
      ? `${this.appTitle} ${config.title}`
      : this.appTitle;
    const url = config.url || 'https://www.stefanocappa.it/amg/v7';
    const twitterProfile = '@ksks89';
    const mainWebsite = 'www.stefanocappa.it';

    this.title.setTitle(title);

    const tags: MetaDefinition[] = [
      {name: 'description', content: description},
      {name: 'theme-color', content: this.appColor},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: twitterProfile},
      {name: 'twitter:creator', content: twitterProfile},
      {name: 'twitter:url', content: url},
      {name: 'twitter:title', content: title},
      {name: 'twitter:description', content: description},
      {name: 'twitter:image', content: image},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
      {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},
      {name: 'apple-mobile-web-app-title', content: title},
      {name: 'apple-touch-startup-image', content: image},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: url},
      {property: 'og:title', content: title},
      {property: 'og:image', content: image},
      {property: 'og:description', content: description},
      {property: 'og:site_name', content: mainWebsite},
      {property: 'og:locale', content: 'en_US'},
      {property: 'og:image:width', content: '1200'},
      {property: 'og:image:height', content: '630'}
    ];

    tags.forEach((tag: MetaDefinition) => this.meta.updateTag(tag));
  }
}
