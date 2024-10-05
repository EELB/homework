import { Component } from '@angular/core';
import { Subject } from './model';
import { SUBJECTS_INFO } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homework-app';
  subjects: Subject[] = SUBJECTS_INFO
  subjectId = ''

  handleSelectSubjectId = (id: string) => {
    this.subjectId = id
  }

  get selectedSubject() {
    return this.subjects.find(item => item.id === this.subjectId)
  }
}
