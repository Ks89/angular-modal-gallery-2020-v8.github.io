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

import { getToken, removeToken, setToken } from './storage.util';

export interface Accordion {
  carouselOpen: boolean;
  modalOpen: boolean;
  plainOpen: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  initAccordion() {
    this.setAccordionByStates(false, false, false);
  }

  getAccordion(): Accordion | undefined {
    try {
      return <Accordion>JSON.parse(getToken() as string);
    } catch {
      return undefined;
    }
  }

  setAccordionByStates(carouselOpen: boolean, modalOpen: boolean, plainOpen: boolean) {
    const accordion: Accordion = {carouselOpen, modalOpen, plainOpen};
    setToken(JSON.stringify(accordion));
  }

  setAccordion(accordion: Accordion) {
    setToken(JSON.stringify(accordion));
  }

  updateCarousel(state: boolean) {
    const accordion = this.getAccordion();
    if (accordion) {
      accordion.carouselOpen = state;
      this.setAccordion(accordion);
    }
  }

  updateModal(state: boolean) {
    const accordion = this.getAccordion();
    if (accordion) {
      accordion.modalOpen = state;
      this.setAccordion(accordion);
    }
  }

  updatePlain(state: boolean) {
    const accordion = this.getAccordion();
    if (accordion) {
      accordion.plainOpen = state;
      this.setAccordion(accordion);
    }
  }

  resetAccordion() {
    removeToken();
  }
}
