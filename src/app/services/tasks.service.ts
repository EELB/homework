import { Injectable } from '@angular/core';
import { NewTask, Task } from '../model';
import { DUMMY_TASKS } from '../data';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks : Task[] = DUMMY_TASKS

  constructor() { 
    const tasks = localStorage.getItem('tasks')
    if (tasks) this.tasks = JSON.parse(tasks)
  }

  addTask = (taskData: NewTask, subjectId: string) => {
    const newTask = {
      ...taskData,
      id: new Date().getTime().toString(),
      subjectId: subjectId
    }
    this.tasks.unshift(newTask)
    this.persistTasks()
  }

  removeTask = (id: string) => {
    this.tasks = this.tasks.filter((item) => item.id !== id)
    this.persistTasks()
  }

  getTask = (id: string) =>{
    return this.tasks.filter(item => item.subjectId === id)
  }

  private persistTasks () {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }


}
