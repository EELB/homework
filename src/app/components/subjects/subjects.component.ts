import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from '../../model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
})
export class SubjectsComponent {

  subjectId: string = ''
  @Input({required: true}) subjects:Subject[] = []
  @Output() selectedSubjectId = new EventEmitter<string>()

  handleSelect = (id: string) => {
    this.subjectId = id
    this.selectedSubjectId.emit(this.subjectId)
  }

}
