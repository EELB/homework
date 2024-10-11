import { Component, inject, Input } from '@angular/core';
import { Task } from '../../../model';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() task!: Task

  private taskService = inject(TasksService)

  handleComplete = () => {
    this.taskService.removeTask(this.task.id)
  }

}
