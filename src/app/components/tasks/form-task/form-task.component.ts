import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewTask, Subject } from '../../../model';

const DEFAULT_NEW_TASK: NewTask = {
  title: '',
  summary: '',
  dueDate: new Date(),
};
@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css',
})
export class FormTaskComponent {
  @Input({ required: true }) subject!: Subject;
  NewTask: NewTask = DEFAULT_NEW_TASK;
  @Output() cancel = new EventEmitter<void>();

  handleCancel = () => {
    this.cancel.emit();
  };

  handleSubmit = (form: NgForm) => {
    if (!form.valid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }

    console.log('Formulario SÍ ES válido');
  };
}
