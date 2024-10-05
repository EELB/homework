import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
})
export class CommonHeaderComponent {

  @Input({required: true}) primaryText: string = ''
  @Input() secondaryText: string = ''
}
