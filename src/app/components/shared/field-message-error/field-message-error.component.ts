import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-field-message-error',
  templateUrl: './field-message-error.component.html',
})
export class FieldMessageErrorComponent {
  @Input({ required: true }) item!: NgModel;
  @Input() minLength: number | string = 1;
}
