import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';
import { Task } from '../tasks';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.scss']
})
export class DoneTasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
    console.log('done-task working!');
  }

  getTasks(): void{
    this.tasks = this.taskService.getTasks()
  }

  notDone(task): void{
    task.isDone = false;
  }

}
