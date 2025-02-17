import { Component, inject, Input } from '@angular/core';
import { Subject } from '../../model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  isAddingTask = false

  @Input({ required: true }) subject!: Subject
  private taskService = inject(TasksService)

  get tasks () {
    return this.taskService.getTask(this.subject.id)
  }

  handleAddTask = () => {
    this.isAddingTask = true
  }

  handleCancelAddTask = () => {
    this.isAddingTask = false
  }

}
