import { Component } from '@angular/core';

import { TitleService } from '../../core/services/title.service';

@Component({
  selector: 'app-demo-page',
  templateUrl: 'demo.html'
})
export class DemoComponent {

  title = 'Modal Gallery';

  constructor(private titleService: TitleService) {
    this.titleService.titleEvent.subscribe((val: string) => {
      this.onUpdateTitle(val);
    });
  }

  onUpdateTitle(event: string) {
    this.title = event;
  }
}
